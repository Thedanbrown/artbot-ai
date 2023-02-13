import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='w-full flex items-center justify-between bg-transparent backdrop-blur-sm sm:px-8 px-2 py-2 sticky top-0 z-50'>
            <div className='flex justify-start'>
                <Link to='/'>
                    <img src='./artbot-ai-logo.png' alt='artbot logo' className='w-20 h-20 object-contain' />
                </Link>
            </div>
            <div className='flex gap-1'>
                {/* need to add is loggedin functionality to do conditional rendering in header */}
                {/* {isLoggedIn 
                ?   <Link to='/profile' className='font-inter text-sm bg-[#279af1] text-white px-2 py-1 rounded-md'>
                        Profile
                    </Link>
                    <Link to='/' className='font-inter text-sm bg-[#279af1] text-white px-2 py-1 rounded-md'>
                        Signout
                    </Link>
                : <Link to='/login-signup' className='font-inter text-sm bg-[#279af1] text-white px-2 py-1 rounded-md'>
                Login/Signup
            </Link>
                } */}
                <Link to='/login-signup' className='font-inter text-sm bg-[#279af1] text-white px-2 py-1 rounded-md'>
                    Login/Signup
                </Link>
                
                <Link to='/profile' className='font-inter text-sm bg-[#279af1] text-white px-2 py-1 rounded-md'>
                    Profile
                </Link>
                <Link to='/' className='font-inter text-sm bg-[#279af1] text-white px-2 py-1 rounded-md'>
                        Signout
                    </Link>
            </div>
            
        </header>
    )
}

export default Header