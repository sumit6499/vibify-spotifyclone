import {useState } from "react";
import { FormField } from "./index";
import {emailValidation,passValidation} from '../utils';
import {google,facebook,apple,eye,closeEye} from '../assets';
import { Link } from "react-router-dom";

export default function Login(){
  const [showPass,setShowPass]=useState(false);
  const [emailWarn,setEmailWarn]=useState(false);
  const [passWarn,setPassWarn]=useState(false);
  const [formData,setFormData]=useState(
    {
      email:'',
      password:'',
    }
  );

  
  const handleSubmit=(e)=>{
    if(!emailValidation(formData.email))
    {
      e.preventDefault();
      setEmailWarn(prev=>!prev);
      
    }
    if(!passValidation(formData.password)){
      e.preventDefault();
      setPassWarn(prev=>!prev);
    }
    console.log(formData)
  }
  
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  
  const clickToShowPass=(e)=>{
    e.preventDefault();
    setShowPass((prev)=>{
      if(!prev)
        return true;
    })
  }


    return(
      <>
      <section className="sm:p-8 sm:mt-8 ">
        <div className="login flex justify-center items-center ">
          <div className="login__social flex items-center  bg-[#000000]  sm:max-w-[500px] sm:rounded-lg w-full  flex-col pb-8">
            <p className="p-8 text-3xl font-medium tracking-tight ">Log in to Vibify
            </p>
            <button className="outline outline-[0.8px] hover:outline-[1.5px]  rounded-3xl py-1 px-8 m-1 ">
              <img src={google} alt='google' className="inline-block w-6  "/>
              <span className="m-6">Continue with Google </span>
            </button>
            <button className="outline  outline-[0.8px] hover:outline-[1.5px]  rounded-3xl py-1 px-6 m-1 ">
              <img src={facebook} alt='facebook' className="inline-block w-6 "/>
              <span className="m-6">Continue with Facebook </span>
            </button>
            <button className="outline outline-[0.8px] hover:outline-[1.5px]  rounded-3xl py-1 px-[36px] m-1 ">
              <img src={apple} alt='apple' className="inline-block w-6 filter brightness-200"/>
              <span className="m-6">Continue with Apple</span>
            </button>
            <button className="outline outline-[0.8px] hover:outline-[1.5px]  rounded-3xl py-2 px-4 m-1 ">
              <span className="m-6">Continue with phone number</span>
            </button>

            <hr className="w-[80%] m-6 border-t-[#292929] rounded-full "/>
            <div className="login-form">

            <form action="post " className="flex flex-col justify-start  ">
            <label htmlFor={'email'} className="mt-4 ">
              Email or username
            </label>
              <FormField  
              type="text" 
              name="email" 
              id="email"
              placeholder="Email or username" 
              warn={emailWarn}
              handleChange={handleChange}
              />
             
             <label htmlFor={'password'} className="mt-4 ">
              Password
            </label>

              <FormField 
              type={showPass?'text':'password'} 
              id="password" 
              name="password"
              placeholder="Password"
              warn={passWarn}
              handleChange={handleChange}
              />

              <img src={showPass?eye:closeEye} alt="" className=" w-6 translate-x-60 translate-y-[-30px]  cursor-pointer  invert" onClick={clickToShowPass}/>

              <button type="submit"className="mt-6 bg-[#1ed760] py-2 rounded-2xl text-[#000000] font-bold hover:font-extrabold hover:scale-x-105" onClick={handleSubmit} >Log In</button>
            </form>


            <p className="mt-4 text-center underline  cursor-pointer hover:text-[#1ed760]">
              <Link to={'/password-reset'}> 
              Forgot your password?
              </Link>
            </p>
            </div>

            <hr className="w-[80%] m-6 border-t-[#292929] rounded-full "/>

            <div className="mid-signUp">
            <span className="text-[#292929]">{"Don't"} have an account?</span>
            <span className="underline cursor-pointer hover:text-[#1ed760] mx-1">
              <Link to={'/signup'}>
              Sign up for Vibify
              </Link>
              </span>
            </div>
          </div>

        </div>
      </section>
      </>

    )
}