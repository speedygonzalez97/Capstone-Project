// @ts-ignore
import Background from '../assets/images/Travel.jpg'
// @ts-ignore
import Paris from '../assets/images/Paris.jpg'
// @ts-ignore
import Venice from '../assets/images/Venice.jpg'
// @ts-ignore
import Ben from '../assets/images/Ben.jpg'
// @ts-ignore
import Delhi from '../assets/images/Delhi.jpg'
// @ts-ignore
import Giza from '../assets/images/Giza.jpg'
// @ts-ignore
import Rio from '../assets/images/Rio.jpg'
// @ts-ignore
import Wall from '../assets/images/Wall.jpg'
// @ts-ignore
import Nyc from '../assets/images/Nyc.jpg'
// @ts-ignore
import Dubai from '../assets/images/Dubai.jpg'
// @ts-ignore
import Sanfran from '../assets/images/Sanfran.jpg'
// @ts-ignore
import Tokyo from '../assets/images/Tokyo.jpg'
// @ts-ignore
import Opera from '../assets/images/Opera.jpg'

function Pictures() {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}} 
    className='justify-center mx-auto bg-cover bg-fixed text-center'>
    <div className='h-screen'>
    <div 
     id="photos" className="p-10 p-lg-0 lg-10 text-center text-sm-start">
    <div className="container p-5">
        <br></br>
        <h1 className='head1 p-20 rounded text-xl'>Hopefully one day you travel places like these!</h1>
        <div className="row g-4 p-4">
            <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Paris} alt="Paris" className="pic p-0 height-20"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Venice} alt="Venice" className="pic img-fluid shadow-lg p-0"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Rio} alt="Rio de Janeiro"
                    className="pic img-fluid shadow-lg p-0"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Wall} alt="Great Wall of China"
                    className="pic img-fluid shadow-lg p-0"></img>
            </div>
            </div>
        <div className="row g-4 p-4">
            <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Giza} alt="Pyramid of Giza"
                    className="pic img-fluid shadow-lg p-0"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Delhi} alt="Taj Mahal" className="pic img-fluid shadow-lg p-0"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Ben} alt="Big Ben" className="pic img-fluid shadow-lg p-0"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Nyc} alt="NYC" className="pic img-fluid shadow-lg p-0"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Dubai} alt="Dubai" className="pic img-fluid shadow-lg p-0"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Sanfran} alt="Golden Gate Bridge" className="pic img-fluid shadow-lg p-0"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Opera} alt="Sydney Opera House" className="pic img-fluid shadow-lg p-0"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Tokyo} alt="Tokyo" className="pic img-fluid shadow-lg p-0"></img>
            </div>
            
        </div>
    </div>
</div>
</div>
</div>

  )
}

export default Pictures