import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useAuth0 } from '@auth0/auth0-react';


function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };
    
// @ts-ignore
    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };



    return (
        <nav className='navbar fixed-top bg-blue-300 margin-auto '>
              
            <div className='container-fluid text-right'>
                <div className="text-sm lg:flex-grow">
                
                <p className='mr-6 text-center text-xl'>
               
                <Link to='/' onClick={ clicked} className='navbar-brand p-20 m-20 text-blue-700 text-xl'>TravNav</Link>
                <div className="text-right btn-group btn-group-sm">
               
                    <Button className='navbar-brand nav-item p-2 bg-blue-950 btn btn-primary '>
                        <div>
                            <Link to='/' onClick={ clicked} className=' mt-1 lg:inline-block lg:mt-0
                             text-teal-200 hover:text-white mr-4'>
                                Welcome
                            </Link>
                        </div>

                    </Button>

                    <Button className='navbar-brand nav-item p-3 bg-blue-950 btn btn-primary'>
                        <div>
                            <Link to='/Recommendation' onClick={ clicked} className='mt-1 lg:inline-block lg:mt-0
                             text-teal-200 hover:text-white mr-4'>
                                Recommendation
                            </Link>
                        </div>

                    </Button>

                    <Button className='navbar-brand nav-item p-3 bg-blue-950 btn btn-primary'>
                        <div>
                            <Link to='/Info' onClick={ clicked} className='mt-1 lg:inline-block lg:mt-0
                             text-teal-200 hover:text-white mr-4'>
                                Info
                            </Link>
                        </div>

                    </Button>
    
                    <Button className='navbar-brand nav-item p-3 bg-blue-950 btn btn-primary'>
                        <div>
                            <Link to='/Planner' onClick={ clicked} className='mt-1 lg:inline-block lg:mt-0
                             text-teal-200 hover:text-white mr-4'>
                                Planner
                            </Link>
                        </div>

                    </Button>
            

                    {
                            !isAuthenticated ? 
                            <Button className='navbar-brand nav-item p-3 bg-blue-950 btn btn-primary'>
                                <div>
                                    <Link to="/" onClick={signInOnClick} className='mt-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                        
                            <Button className='navbar-brand nav-item p-3 bg-blue-950 btn btn-primary'>
                                <div>
                                    <Link to="/" onClick={signOutOnClick} className='mt-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                    </div>
                    </p>
                </div>
            </div>
            
            
            
        </nav>
    )  
}

export default Navbar