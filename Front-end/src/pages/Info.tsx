// @ts-ignore
import Background from '../assets/images/Travel.jpg'

function Info() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='justify-center mx-auto bg-cover bg-fixed text-center'>
         <div className='h-screen'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className='p-19 bg-opacity-100 text-lime-200 rounded mx-auto text-xl'>This is the info page where I can give you specific travel tips
        and advice that<br></br> can make your travel less stressful and possibly cost-efficient. </h1>
        <br></br>
        <br></br> 
        <br></br>
        <h1 className='p-19 bg-opacity-100 text-white rounded mx-auto text-sm'>

        <li>Create an account and start gathering all the information that you will need for your next trip. </li>

        <li>Be aware of your current budget and how much money you are going to be spending on your next trip. </li>

        <li>Do research! It would look silly to go to a city or country and not know anything beforehand.<br></br>
        There are various sources especially in the recommendation page about other websites and videos to prep for your trip.</li>

        <li>Bring materials that you may need to keep you safe on your trip.
            Such of these materials include: <br></br> 
            flashlight, first-aid kit emergency money, extra clothes, masterlock,<br></br> maps, water, 
            bags, important personal documents(id,passport, bank account)
        </li>

        <li> Get familiar with the language and culture of the country or city.<br></br>
        Life is going to be a lot easier for you abroad when you can easily ask for directions,<br></br>
        buy things, conversate with foreign people, know what customs and traditions the locals practice.
        </li>

        <li>Avoid scammers anywhere and all the time! There are people that love<br></br>
        taking advtantage of the naive and vulnerable, and many of these scammers will<br>
        </br>
        act pushy or overly nice to get you to buy something from them.<br></br> </li>

        <li>When traveling in tours, make sure to carry a map, and stick to crowds, <br></br>
        its very easy to get lost when there are not a lot of people nearby, so<br></br>
        stick to packs. </li>

        <li> If you are goint with multiple people, make sure everybody is on the same page<br></br>
        otherwise, differences can ruin a trip and you don't need this extra stress when traveling.</li>

        <li> Receive flight or hotel deals from having points by credit card membership,  <br></br>
        company deals, or membership of a traveling group.</li>

        <li> Get familiar with the procedure, especially if you frequently travel  <br></br>
        having experience knowledge, can help your brain and gut make wiser decisions.</li>

        
        </h1>
    </div>
    </div>
  )
}

export default Info