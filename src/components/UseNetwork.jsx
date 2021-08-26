import React, { useState, useEffect, useRef } from 'react';

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if(typeof onChange === "function"){
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }

  useEffect(()=>{
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);

    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    }
  }, []);

  return status;
}

export const UseNetwork = () => {
  const handleNtCh = (online) => {
    console.log(online?'we are online':'we are off to a flyer')
  }

  const online = useNetwork(handleNtCh);

  return (
    <div>
      <h1>{online ? 'online':'offline'}</h1>
    </div>
  )
}
