import React, { useState } from 'react'
import '../App.css'
import { google,facebook } from '@/assets'
import { FormField } from '.'
import { Link } from 'react-router-dom'
import { emailValidation } from '@/utils'


export default function SignUp() {
  const [email,setEmail]=useState('');
  const [emailWarn,setEmailWarn]=useState(false);

  const handleSubmit=(e)=>{
    if(!emailValidation(email))
      e.preventDefault();
      setEmailWarn(true);
  }
  
  const handleChange=(e)=>{
    setEmail(e.target.value);
  }
  return (
    <section className='bg-[#121212] w-full min-h-[calc(100vh-55px)] flex justify-center xs:p-2 '>
        <div className="sign_up bg-transparent p-6 sm:p-4  flex flex-col xs:max-w-[300px] w-full">
            <h1 className='text-3xl font-extrabold '>Sign Up to start
            <br />Listening</h1>

            <form action="post">

            <label htmlFor="signup-email" className='mt-8 mb-1 text-xs font-bold'>Email address</label>
            <FormField
            type={'text'}
            id={'signup-email'}
            name={'email'}
            placeholder={'name@domain.com'}
            handleChange={handleChange}
            warn={emailWarn}
            />

            <p className='mt-3 text-xs underline text-[#1ed760] cursor-pointer'>Use phone number instead. </p>

            <button className='bg-[#1ed760] hover:bg-[#1abc54] w-full mt-3 rounded-full py-1 text-[#000000] font-bold transition-colors' onClick={handleSubmit}>Next</button>
            </form>

            <span className='mid mt-8 text-center font-bold text-sm '>or</span>

            <button className="border-white border-[0.8px] hover:border-[1.5px]  rounded-3xl  px-1 py-1.5 mt-6 m-1">
              <img src={google} alt='google' className="inline-block w-6  "/>
              <span className="m-6 text-sm font-bold">Continue with Google </span>
            </button>
            <button className="border-white  border-[0.8px] hover:border-[1.5px]  rounded-3xl px-1 py-1.5 m-1 ">
              <img src={facebook} alt='facebook' className="inline-block w-6 "/>
              <span className="m-4 text-sm font-bold">Continue with Facebook </span>
            </button>

            <hr className='w-full border-[#292929] mt-8'/>

            <div className="already-account flex mt-4 ">
                <p className='text-xs text-[#a7a7a7]'>Already have an account?</p>
                <span className='text-xs mx-1 underline font-bold hover:text-[#1ed760] transition cursor-pointer'>
                    <Link to={'/login'}> Log in here.</Link>
                   </span>
            </div>
        </div>
    </section>
  )
}
