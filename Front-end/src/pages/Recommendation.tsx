// @ts-ignore
import Background from '../assets/images/Travel.jpg'

function Recommendation() {
  return (
    <div  style={{ backgroundImage: `url(${ Background })`}} 
    className='justify-center mx-auto bg-cover bg-fixed text-center'>
    <div className='h-screen'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <div className="container mt-3">
        <h1 className="text-lime-400 text-xl">Dark Striped Table</h1>
        <h1 className="text-orange-400 text-xl">This table has recommended websites, resorces, countries, and many help for your travel.
        Utilize it wisely and click on the links. </h1>            
        <table className="table table-success table-striped">
            <thead>
            <tr>
            <th>Best travel websites</th>
            <th>Best travel gear blogs</th>
            <th>Best cities to travel to</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><a href="https://practicaltravelgear.com/?utm_source=feedspot">Practical Travel Gear</a></td>
                <td><a href="https://www.booking.com">Booking.com</a></td>
                <td>Rome</td>
            </tr>
            <tr>
                <td><a href="https://herpackinglist.com/blog/?utm_source=feedspot">Her Packing List</a></td>
                <td><a href="https://www.expedia.com">expedia.com</a></td>
                <td>Paris</td>
            </tr>
            <tr>
                <td><a href="https://packhacker.com/blog/?utm_source=feedspot">Pack Hacker</a></td>
                <td><a href="https://www.kayak.com/">kayak.com</a></td>
                <td>Honolulu</td>
            </tr>
            <tr>
                <td><a href="https://blog.tortugabackpacks.com/?utm_source=feedspot">Tortuga</a></td>
                <td><a href="https://www.going.com">going.com</a></td>
                <td>Singapore</td>
            </tr>
            <tr>
                <td><a href="https://www.thepackablelife.com">The Packable Life</a></td>
                <td><a href="https://www.tripadvisor.com"></a>tripadvisor.com</td>
                <td>Rio de Janeiro</td>
            </tr>
            <tr>
                <td><a href="https://theplanetd.com">Planet D</a></td>
                <td><a href="https://www.priceline.com">priceline.com</a></td>
                <td>Istanbul</td>
            </tr>
            <tr>
                <td><a href="https://travelfreak.com">Travel Freak</a></td>
                <td><a href="https://www.hotwire.com">hotwire.com</a></td>
                <td>Barcelona</td>
            </tr>
            <tr>
                <td><a href="https://www.eaglecreek.com">Eagle Creek</a></td>
                <td><a href="https://www.orbitz.com">orbitz.com</a></td>
                <td>Tokyo</td>
            </tr>
            <tr>
                <td><a href="https://worldtravelfamily.com">World Travel Family</a></td>
                <td><a href="https://www.hotels.com">hotels.com</a></td>
                <td>New York City</td>
            </tr>
            <tr>
                <td><a href="https://www.travelsmith.com">Travel Smith</a></td>
                <td><a href="https://www.google.com/travel/">google.com</a></td>
                <td>Dubai</td>
            </tr>
      
      
            </tbody>
  </table>
</div>
  </div>
  </div>
  )
}

export default Recommendation