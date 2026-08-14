import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  // let count = 15

  //using hooks
  let  [count,setCount] = useState(10)

  const addValue = () =>{
    // console.log("Increase value",Math.random())
    // count= count+1//value is increasing but not updating in ui so,will use useState() hook

    setCount(count+1)//using hooks for updating
  }

  const decValue = () =>{
    setCount(count-1)
  }
  return (
    <>
      <section id="center">
        <h1>Counter</h1>
        <h2>Counter Value: {count}</h2>
        <button
        onClick={addValue}>Increase value</button>
        <button
        onClick={decValue}>Decrease value</button>
      </section>
    </>
  )
}

export default App
