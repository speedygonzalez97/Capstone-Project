from flask import Blueprint, request, jsonify, render_template
from helpers import token_required
from models import db, User, Travel, travel_schema, travels_schema

api = Blueprint('api',__name__, url_prefix='/api')

@api.route('/travels', methods = ['POST'])
@token_required
def create_travel(current_user_token):
    destination = request.json['destination']
    trip_type = request.json['trip_type']
    start_date = request.json['start_date']
    end_date = request.json['end_date']
    total_people = request.json['total_people']
    total_luggages = request.json['total_luggages']
    budget = request.json['budget']
    items_needed = request.json['items_needed']
    user_token = current_user_token.token

    print(f'BIG TESTER: {current_user_token.token}')

    travel = Travel(destination, trip_type, start_date, end_date, total_people, total_luggages, budget, items_needed, user_token = user_token )

    db.session.add(travel)
    db.session.commit()

    response = travel_schema.dump(travel)
    return jsonify(response)

@api.route('/travels', methods = ['GET'])
@token_required
def get_travel(current_user_token):
    a_user = current_user_token.token
    travels = Travel.query.filter_by(user_token = a_user).all()
    response = travels_schema.dump(travels)
    return jsonify(response)

@api.route('/travels/<id>', methods = ['GET'])
@token_required
def get_single_travel(current_user_token, id):
    travel = Travel.query.get(id)
    response = travel_schema.dump(travel)
    return jsonify(response)

@api.route('/travels/<id>', methods = ['POST','PUT'])
@token_required
def update_travel(current_user_token,id):
    travel = Travel.query.get(id) 
    travel.destination = request.json['destination']
    travel.trip_type = request.json['trip_type']
    travel.start_date = request.json['start_date']
    travel.end_date = request.json['end_date']
    travel.total_people = request.json['total_people']
    travel.total_luggages = request.json['total_luggages']
    travel.budget = request.json['budget']
    travel.items_needed = request.json['items_needed']
    travel.user_token = current_user_token.token

    db.session.commit()
    response = travel_schema.dump(travel)
    return jsonify(response)

@api.route('/travels/<id>', methods = ['DELETE'])
@token_required
def delete_travel(current_user_token, id):
    travel = Travel.query.get(id)
    db.session.delete(travel)
    db.session.commit()
    response = travel_schema.dump(travel)
    return jsonify(response)