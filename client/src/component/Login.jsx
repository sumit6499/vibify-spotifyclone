import React from "react";
import {logo,google,facebook,apple} from '../assets';






export default function Login(){

   
    
    return(
      <>
      
      <header  className="flex w-full bg-[#000000] items-center py-2 pl-2 ">
          <img src={logo} alt="" className="w-10 object-contain   "/>
          <span className="text-lg font-medium tracking-wide ml-1 ">Vibify</span>
      </header>

      <section className="sm:p-8 sm:mt-8 ">
        <div className="login flex justify-center items-center ">
          <div className="login__social flex items-center  bg-[#000000]  sm:max-w-[500px] sm:rounded-lg w-full  flex-col pb-8">
            <p className="p-8 text-3xl font-medium tracking-tight ">Log in to Vibify
            </p>
            <button className="border-white border-[0.8px] hover:border-2  rounded-3xl py-1 px-8 m-1 ">
              <img src={google} alt='google' className="inline-block w-8"/>
              <span className="m-6">Continue with Google </span>
            </button>
            <button className="border-white border-[0.8px] hover:border-2  rounded-3xl py-1 px-6 m-1 ">
              <img src={facebook} alt='facebook' className="inline-block w-8 "/>
              <span className="m-6">Continue with Facebook </span>
            </button>
            <button className="border-white border-[0.8px] hover:border-2  rounded-3xl py-1 px-[36px] m-1 ">
              <img src={apple} alt='apple' className="inline-block w-8"/>
              <span className="m-6">Continue with Apple</span>
            </button>
            <button className="border-white border-[0.8px] hover:border-2  rounded-3xl py-2 px-6 m-1 ">
              <span className="m-6">Continue with phone number</span>
            </button>

            <hr className="w-[80%] m-6 border-t-[#292929] rounded-full "/>
            <div className="login-form">

            <form action="post " className="flex flex-col justify-start  ">
              <label htmlFor="email">
                Email or username
              </label>
              <input type="text" name="email" placeholder="Email or username" className=" border-white  hover:shadow border shadow-[#878787] py-2 px-3 placeholder:absolute placeholder:left-3 rounded-sm bg-[#121212]"/>
              <label htmlFor="email" className="mt-4">
                Password
              </label>
              <input type="text" name="email" placeholder="Password" className=" border-white  hover:shadow border shadow-[#878787] py-2 px-12 placeholder:absolute placeholder:left-3 rounded-sm bg-[#121212]"/>

              <button type="submit" className="mt-8 bg-[#1ed760] py-2 rounded-2xl text-[#000000] font-bold hover:font-extrabold hover:scale-x-105">Log In</button>
            </form>
            <p className="mt-4 text-center underline ">Forgot your password?</p>
            </div>
            <hr className="w-[80%] m-6 border-t-[#292929] rounded-full "/>
            <span className="text-[#292929] ">Don't have an account?</span>
            <span className="underline">Sign up for Vibify</span>
          </div>
        </div>
      </section>
      </>

    )
}