import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import MyParams from './Components/MyParams.jsx'
import GitHub,{apicall} from './Components/GitHub.jsx'

//Option 1 of creating route
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

//Option 2 of creating route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>

      <Route path='' element = {<Home/>} />
      <Route path='about' element = {<About/>} />
      <Route path='contact' element = {<Contact/>} />
      <Route path='params/:userid' element = {<MyParams />} />
      <Route loader={apicall} path='github' element = {<GitHub />} />

    </Route >
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>,
)
