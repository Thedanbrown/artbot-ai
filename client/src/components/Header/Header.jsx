import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'
import auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';


const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        auth.logout();
    };
    
    const { loading, data, error } = useQuery(QUERY_ME);
    const userData = data?.me || [];

    return (
        <header className='w-full flex items-center justify-between bg-transparent backdrop-blur-sm sm:px-8 px-2 py-2 sticky top-0 z-50'>
            <div className='flex'>
                <Link to='/'>
                    <img src='./artbot-ai-logo.png' alt='artbot logo' className='w-20 h-20 object-contain' />
                </Link>
                
            </div>
            <div className='flex'>
            {auth.loggedIn()
            ? <p className='flex align-center justify-center text-[#4392f1]'>Welcome {userData.firstName}</p>
            : <></>
            }
            
            </div>
            <div className='flex gap-1'>
                {auth.loggedIn()
                ?  <> 
                    <Link to='/profile' className='font-inter text-sm bg-[#279af1] text-white px-2 py-1 rounded-md'>
                        Profile
                    </Link>
                    <Link to='/update' className='font-inter text-sm bg-[#279af1] text-white px-2 py-1 rounded-md'>
                        update Info
                    </Link>
                    <Link to='/' className='font-inter text-sm bg-[#279af1] text-white px-2 py-1 rounded-md' onClick={logout}>
                        Signout
                    </Link>
                    </>
                    
                : <Link to='/login-signup' className='font-inter text-sm bg-[#279af1] text-white px-2 py-1 rounded-md'>
                Login/Signup
            </Link>
                }
            </div>
            
        </header>
    )
}

export default Header