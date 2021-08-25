import React, { useState, useEffect, useRef } from 'react';

const useClick = (fn) => {

  if(typeof fn !== "function"){
    return;
  }

  const elem = useRef();

  useEffect(()=>{
    if(elem.current){
      elem.current.addEventListener("click", fn);
    }

    return () => {
      if(elem.current){
        elem.current.removeEventListener("click", fn);
      }
    }
  }, [])

  return elem;
}

export const UseClickApp = () => {

  const sayHello = () => {
    console.log('say hi');
  }

  const elem = useClick(sayHello);


  return (
    <div className="App">
      <h1 ref={elem}>Hi</h1>
      <input type="text" placeholder="la" />
    </div>
  )
}
