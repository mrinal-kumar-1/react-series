import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// use of States

function App() {
  
  // let counter = 10;
  const [counter, setCounter] = useState(10)

  const increaseValue = () => {
    if(counter === 20 ){
          return
    }
    else{
      setCounter(counter + 1)
    }
    
  }
  const decreaseValue = () => {
    if(counter === 0){
      return
    } 
    else{
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      <h2>Counter</h2>
      <p>Value : {counter}</p>
      <button onClick={increaseValue}>Increase</button>
      <br />
      <button onClick={decreaseValue}>Decrease</button>
      <p>{counter}</p>
    </>
  )
}

export default App
