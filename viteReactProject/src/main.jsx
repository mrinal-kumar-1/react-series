import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let evaluatedexp = "This is evaluated expression"
//we can create react element
let reactElement = React.createElement(
  'a', //tag name
  //properties but in object form
  {
    href : 'https://linkedin.com',
    target : '_blank'
  },
  'LinkedIn' ,//final text
   evaluatedexp
)


function Fun(){
  return(
    <h2>Gaadi wala aaya ghar se kachra nikal</h2>
  )
}

const el = (
  <h2>Happy B'day</h2>
)

ReactDOM.createRoot(document.getElementById('root')).render(

  //  <App />
  
reactElement
  
)
