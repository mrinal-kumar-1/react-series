import React from 'react'
import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  

  return (
    // todo completed with Redux
    <>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </>
  )
}

export default App
