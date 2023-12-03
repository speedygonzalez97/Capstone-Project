// @ts-ignore
import Background from '../assets/images/Travel.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='justify-center mx-auto bg-cover bg-fixed text-center'>
        <div className='h-screen'>
        <br></br>
        <br></br>
          <h1 className='p-20 bg-opacity-100 text-lime-300 rounded mx-auto text-xl'>We introduce you to one
          of the best travel guide websites on the internet.<br></br> Welcome to TravNav, short for travel
          navigation, and I'm here to help
          on your next flight journey.</h1>
          <h1 className='p-20 bg-opacity-100 text-xl text-orange-800 rounded mx-auto'>People traveling
          all around the world are always going to ask questions about their travel such as:
          
            <li>When is the best time of the year to travel?</li>
            <li>What are the best flight to use and how do they compare to other flights?</li>
            <li>What is the total budget of my trip?</li>
            <li>What are the best places in the world to travel and recommended by other travelers?</li>
            <li>What travel booking websites do you recommend I use and buy plane tickets and hotel stay from?</li>
          

          <h1 className='p-20 bg-opacity-100 text-xl text-white rounded mx-auto'>If you find yourself, asking the above
          questions or something similar to those, <br></br>I'm here to help you and guide you so you can have
          the best travel with minimal error.</h1>
          
          
          </h1>
          

        </div>
       
  
    </div>

  )
}

export default Home