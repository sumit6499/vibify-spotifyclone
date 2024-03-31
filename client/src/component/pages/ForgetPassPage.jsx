import { useState } from 'react'
import  '@/app.css'
import { FormField } from '.'
import { emailValidation } from '@/utils';


function ForgetPassPage() {

  const [formData,setFormData]=useState('');
  const [warning,setWarning]=useState(false);

  
  const handleChange=(e)=>{
    setFormData(e.target.value);
  }

  const handleSubmit=(e)=>{
    if(!emailValidation(formData))
    {
      e.preventDefault();
      setWarning(true);
    }
  }
  return (
   <section className='flex bg-[#121212] w-full min-h-[calc(100vh-55px)] justify-center '>

    <div className="reset-field  p-8 max-w-[400px] w-full ">

    <h1 className='text-2xl lg:text-3xl text-center font-extrabold'>Password Reset</h1>

    <p className='text-[#a7a7a7] text-xs text-center mt-6 '>
      Enter your 
      <b> Vibify username </b>
      , or the 
      <b> email address </b>
      that you used to register.
      {"We'll"} send you an email with your username and a link to reset your password.
    </p>

    <form action="post" className='mt-6 flex flex-col'>

      <label htmlFor="reset-pass" className='text-xs font-semibold mb-1 '>
        Email address or username
      </label>

      <FormField 
      type='text'
      placeholder={'Email address or username'}
      name={'reset-pass'}
      id={'reset-pass'}
      handleChange={handleChange}
      warn={warning}
      />

      <button className='mt-4 text-sm m-auto rounded-full px-6 py-2 bg-[#1ed760] text-[#000000] font-bold' onClick={handleSubmit}>Send</button>
    </form>
    </div>
    
   </section>
  )
}

export default ForgetPassPage
