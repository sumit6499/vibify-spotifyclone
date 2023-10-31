import React from 'react'
import { logo } from './assets'
import {ForgetPassPage, Home,Login} from './component'
import { Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <>
    
    <header  className="flex w-full bg-[#000000] items-center py-2 pl-2 ">
    <img src={logo} alt="" className="w-10 object-contain cursor-pointer  "/>
    <span className="text-lg font-medium tracking-wide ml-1 ">Vibify</span>
</header>

    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/password-reset' element={<ForgetPassPage/>}/>
      </Routes>
    </div>
    </>
  )
}
