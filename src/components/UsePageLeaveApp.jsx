import React, { useState, useEffect, useRef } from 'react';

const useBfLeave = (cb) => {
  if(typeof cb !== "function"){
    return;
  }

  const handle = (e) => {
    const { clientY } = event;
    if(clientY <= 0){
      cb();
    }

  };

  useEffect(()=>{
    document.addEventListener('mouseleave', handle);

    return () => document.removeEventListener('mouseleave', handle);
  }, [])
}

export const UsePageLeaveApp = () => {
  const begForLife = () => {
    console.log('plz do not go')
  }

  useBfLeave(begForLife);

  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}
