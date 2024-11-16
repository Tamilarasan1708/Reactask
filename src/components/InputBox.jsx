import React from 'react'

const InputBox = ({style,value,disabled,type,required,placeholder,onChange,accept,name}) => {
  return (
    <>
   
         <input
            type={type}
            className={`text-sm rounded-lg  cursor-pointer border  ml-5 focus:border-slate-400 focus:ring-2  focus:outline-none  border-white  text-white  ${style}`}
            value={value}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            accept={accept}
            name={name}
          
          />
    </>
  )
}

export default InputBox;

