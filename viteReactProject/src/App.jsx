import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let newvar = 'Hi, again'
  return (
    <h2>Hello
      how are you doing ? {newvar}{/*evaluated expression, i.e technique to inject variable */}
    </h2>
  )
}

export default App
