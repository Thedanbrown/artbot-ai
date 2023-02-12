import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Checkout, Home, LoginSignup, Profile, UpdateInfo } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-transparent backdrop-blur-sm sm:px-8 px-2 py-2 sticky top-0 z-50'>
        <Link to='/'>
          <img src='./artbot-ai-logo.png' alt='artbot logo' className='w-28 object-contain' />
        </Link>
        <Link to='/login-signup' className='font-inter font-medium bg-[#279af1] text-white px-4 py-2 rounded-md'>
        Login/Signup
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f7f7ff] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login-signup' element={<LoginSignup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/update' element={<UpdateInfo />} /> 
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App