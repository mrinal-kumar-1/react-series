import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import './App.css'
import authService from './appwrite/auth_services'
import {login, logout} from './store/authSlice'
import { Header, Footer } from './components/index'
import {Outlet} from 'react-router-dom'

function App() {
 const [loading, setLoading] = useState(true)
 const dispatch = useDispatch()
 useEffect(() => {
   authService.getCurrentUser()
   .then((userData) => {
    if(userData){
      dispatch(login(userData))
    }
    else{
      dispatch(logout())
    }
   }).finally(() => setLoading(false))
 }, [])

//returning by judging the loading condition
  return !loading ? (
    <div className=' flex flex-wrap content-between'> Testing
      <div className='w-full block'>
        <Header></Header>
        <main>
          <Outlet />
        </main>
        <Footer></Footer>
       </div> 
    </div>
  ) : null
}

export default App
