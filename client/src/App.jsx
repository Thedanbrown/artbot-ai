import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Checkout, Home, LoginSignup, Profile, UpdateInfo } from './pages'
import { Header } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
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