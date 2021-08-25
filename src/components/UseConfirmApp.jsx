import React, { useState, useEffect, useRef } from 'react';

const usePreventLeave = () => {
  const listener  = e => {
    e.preventDefault();
    e.returnValue = "";
  }

  const enablePrevent = () => {
    window.addEventListener('beforeunload', listener);
  }
  const disablePrevent = () => {
    window.removeEventListener('beforeunload', listener);
  }

  return {enablePrevent, disablePrevent};
}

export const UseConfirmApp = () => {
  const {enablePrevent, disablePrevent} = usePreventLeave();

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  )
}
