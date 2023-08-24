import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15)
//counter is a variable and setCounter is a method responsible for updating counter value

  // let counter = 15
  const addValue = () => {
    // console.log("clicked",counter)
    // counter = counter + 1
    setCounter(counter + 1)
    // console.log("value added",Math.random())
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value:{counter}</h2>
    <button
    onClick={addValue}
    
    >Add value {counter}</button><br />
    <button onClick={removeValue}>Decrease Value {counter}</button>
    <p>footer: {counter}</p>

    </>
  )
}

export default App
