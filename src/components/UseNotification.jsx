import React, { useState, useEffect, useRef } from 'react';

const useNotification = (title, options) => {
  if(!("Notification" in window)) return;

  const fireN = () => {
    if(Notification.permission !== "granted"){
      Notification.requestPermission()
        .then(permission => {
          if(permission === "granted"){
            new Notification(title, options);
          }else{
            return;
          }
        })
    }else{
      new Notification(title, options);
    }
  }

  return fireN;
}

export const UseNotification = () => {
  const tirggerN = useNotification('Can I steel your kimchi?', {body: "I love kimchi, don't you?"});

  return (
    <div>
      <h1>Hi</h1>
      <button onClick={tirggerN}>Hello</button>
    </div>
  )
}
