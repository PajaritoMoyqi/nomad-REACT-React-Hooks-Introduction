import React, { useState } from 'react'


export const App = () => {

  const [item, setItem] = useState(1)
  const incrementItem = () => {
    setItem(item + 1);
  }
  const decrementItem = () => {
    setItem(item - 1);
  }


  return (
    <div>
      <h1>{item}</h1>
      <button onClick={incrementItem}>I</button>
      <button onClick={decrementItem}>D</button>
    </div>
  )
}