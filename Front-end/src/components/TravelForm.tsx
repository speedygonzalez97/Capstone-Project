// @ts-ignore
import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { choosebudget, choosedestination, chooseenddate, chooseid, chooseitemsneeded, choosestartdate, choosetotalluggages, choosetotalpeople, choosetriptype } from "../redux/slices/RootSlice"


interface TravelFormProps {
  id?: string[]
  onClose: () => void;
}

  const TravelForm = ( props:TravelFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();
  
  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(choosebudget(data.budget));
      dispatch(choosedestination(data.destination));
      dispatch(chooseenddate(data.end_date));
      dispatch(chooseid(data.id));
      dispatch(chooseitemsneeded(data.items_needed));
      dispatch(choosestartdate(data.start_date));
      dispatch(choosetotalluggages(data.total_luggages));
      dispatch(choosetotalpeople(data.total_people));
      dispatch(choosetriptype(data.trip_type));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div>
          <label htmlFor="destination">Destination</label>
          <Input {...register('destination')} name='destination' placeholder="destination" />
        </div>
        <div>
          <label htmlFor="start_date">Start Date</label>
          <Input {...register('start_date')} name='start_date' placeholder="start_date" />
        </div>
        <div>
          <label htmlFor="end_date">End Date</label>
          <Input {...register('end_date')} name='end_date' placeholder="end_date" />
        </div>
        <div>
          <label htmlFor="total_people">Total People</label>
          <Input {...register('total_people')} name='total_people' placeholder="total_people" />
        </div>
        <div>
          <label htmlFor="total_luggages">Total Luggages</label>
          <Input {...register('total_luggages')} name='total_luggages' placeholder="total_luggages" />
        </div>
        <div>
          <label htmlFor="budget">Budget</label>
          <Input {...register('budget')} name='budget' placeholder="budget" />
        </div>
        <div>
          <label htmlFor="items_needed">Items Needed</label>
          <Input {...register('items_needed')} name='items_needed' placeholder="items_needed" />
        </div>
        <div>
          <label htmlFor="trip_type">Trip Type</label>
          <Input {...register('trip_type')} name='trip_type' placeholder="trip_type" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default TravelForm