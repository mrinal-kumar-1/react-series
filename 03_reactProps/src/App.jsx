import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeamsOne from './components/TeamCard'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    name: "Harsh"
  }

  return (
    <>
     <h1 className='text-white bg-slate-400 p-5 rounded-md font-bold'>Hi everyone, learning Tailwind and Props here</h1>

     <TeamsOne CartName="My Cart" Product1="PUMA" />
     <TeamsOne CartName="Your Cart" Product1="ASICS"/>
     <TeamsOne CartName="His Cart" Product1="SKECHERS"/>
    </>
  )
}

export default App
