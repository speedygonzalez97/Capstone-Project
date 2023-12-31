"""empty message

Revision ID: 5caa1ab0e906
Revises: 
Create Date: 2023-12-01 23:30:39.351944

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5caa1ab0e906'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.String(), nullable=False),
    sa.Column('first_name', sa.String(length=150), nullable=True),
    sa.Column('last_name', sa.String(length=150), nullable=True),
    sa.Column('email', sa.String(length=150), nullable=False),
    sa.Column('password', sa.String(), nullable=True),
    sa.Column('g_auth_verify', sa.Boolean(), nullable=True),
    sa.Column('token', sa.String(), nullable=True),
    sa.Column('date_created', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('token')
    )
    op.create_table('travel',
    sa.Column('id', sa.String(), nullable=False),
    sa.Column('destination', sa.String(length=150), nullable=False),
    sa.Column('trip_type', sa.String(length=200), nullable=True),
    sa.Column('start_date', sa.String(length=20), nullable=True),
    sa.Column('end_date', sa.String(length=200), nullable=True),
    sa.Column('total_people', sa.String(length=200), nullable=True),
    sa.Column('total_luggages', sa.String(length=20), nullable=True),
    sa.Column('budget', sa.String(length=200), nullable=True),
    sa.Column('items_needed', sa.String(length=200), nullable=True),
    sa.Column('user_token', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['user_token'], ['user.token'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('travel')
    op.drop_table('user')
    # ### end Alembic commands ###
