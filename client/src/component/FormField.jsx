import React,{ useState} from 'react'




function FormField({
  type,
  name,
  id,
  placeholder,
  handleChange,
  warn,
}) {
  
  
  

  return (
    <>
    <input 
    type={type}
    name={name} 
    id={id}
    placeholder={placeholder}
    onChange={handleChange}
    className={`${warn?'border-red-700':'border-[#878787]'} box-border hover:shadow border shadow-[#878787] py-2 pl-3 w-72 overflow-hidden placeholder:absolute placeholder:left-3 placeholder:top-2.5 rounded-sm bg-[#121212] focus:border`}
    required
    />
    </>
  )
}

export default FormField
