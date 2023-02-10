import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Checkout, Home, LoginSignup, Profile, UpdateInfo } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <img src='./artbot-ai-logo.png' alt='artbot logo' className='w-28 object-contain' />
        </Link>
      </header>
    </BrowserRouter>
  )
}

export default App