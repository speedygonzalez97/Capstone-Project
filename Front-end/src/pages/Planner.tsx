// @ts-ignore
import DataTable from '../components/DataTable'
// @ts-ignore
import Background from '../assets/images/Travel.jpg'


function Planner() {
  return (
    
    <div style={{ backgroundImage: `url(${ Background })`}} className='justify-center mx-auto bg-cover bg-fixed text-center'>
      <div className='h-screen'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      
      
      <p className='justify-center mx-auto bg-cover bg-fixed text-center text-lime-300'>
      This is where you can plan your future travels. Input your desired destination, flight date range,<br></br>
      total people, total luggages, trip type, items needed, and planned budget. </p>
            <DataTable />
    </div>
    </div>
  )
}

export default Planner