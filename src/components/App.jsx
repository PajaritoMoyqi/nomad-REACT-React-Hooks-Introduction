import React, { useState, useEffect } from 'react'


export const App = () => {

  const [item, setItem] = useState(1)

  const sayHello = () => console.log('Hi');

  useEffect(() => {
    sayHello();
  }, [item])

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