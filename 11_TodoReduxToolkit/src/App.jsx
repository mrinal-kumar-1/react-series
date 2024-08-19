import React from 'react'
import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  

  return (
    <>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </>
  )
}

export default App
