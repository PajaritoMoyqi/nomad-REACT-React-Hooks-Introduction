import React, { useState, useEffect, useRef } from 'react';

const useFadeIn = (dur=1, delay=0) => {
  if(typeof dur !== "number" || typeof delay !== "number"){
    return;
  }
  
  const elem = useRef();

  useEffect(()=>{
    if(elem.current){
      const { current } = elem;

      current.style.transition = `opacity ${dur}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [])

  return {ref : elem, style: {opacity: 0}};
}

export const UseFadeIn = () => {
  const fadeInH1 = useFadeIn(3, 1);



  return (
    <div>
      <h1 {...fadeInH1}>Hi</h1>
    </div>
  )
}
