import React, { useState } from 'react'

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    const { target: { value } } = event;
    
    let willUpdate = true;

    if(typeof validator === "function"){
      willUpdate = validator(value);
    }

    if(willUpdate){
      setValue(value)      
    }
  }

  return { value, onChange };
}

export const UseInputApp = () => {

  const maxLength = val => value.length <= 10;

  const name = useInput('Mr.', maxLength)

  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="name" {...name} />
    </div>
  )
}