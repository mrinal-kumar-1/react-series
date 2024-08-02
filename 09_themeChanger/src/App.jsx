import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/themeContext'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")
  const darkTheme = () => {
    setThemeMode("dark");
  }
  const lightTheme = () => {
    setThemeMode("light");
  }

  //changing the theme i.e exactly injecting dark and light on html
 useEffect(() => {

    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)

 },[themeMode])
  
  return (
    
<ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
         <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theme toggle switch */}
                        <ThemeBtn />
         </div>

        <div className="w-full max-w-sm mx-auto">
                       {/* card UI */}
                       <Card />
        </div>
     </div>
</div>
</ThemeContextProvider>
  )
}

export default App
