import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='w-full flex justify-between items-center bg-transparent backdrop-blur-sm sm:px-8 px-2 py-2 sticky top-0 z-50'>
            <Link to='/'>
                <img src='./artbot-ai-logo.png' alt='artbot logo' className='w-20 h-20 object-contain' />
            </Link>
            <Link to='/login-signup' className='font-inter font-small bg-[#279af1] text-white px-2 py-1 rounded-md'>
                Login/Signup
            </Link>
        </header>
    )
}

export default Header