import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed]  = useState(false)
  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copy")

  const passRef = useRef(null)

//useCallback React Hook
   const passGenerator = useCallback(() => {

      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "[]{}-_+=!@#$%^&*()/?>.<,~`"

      for(let i = 1; i <= length; i++){
          let index = Math.ceil(Math.random() * str.length + 1)
          pass += str.charAt(index);
      }

      setPassword(pass);
      setCopy("Copy")

   }, [length, numberAllowed, charAllowed, setPassword])

//useEffect React Hook
    useEffect(() => {
      passGenerator()
    }, [length, numberAllowed, charAllowed, passGenerator])


 //copy function
     const copyPassToClipboard = useCallback(() => {

        window.navigator.clipboard.writeText(password)
        passRef.current?.select();

     }, [password])

 //display copied
 const copied = function(){
  setCopy("Copied!")
 }    

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg bg-blue-950 text-white py-4 px-3 my-10'>

        <h1 className='font-bold text-3xl text-center mb-10 mt-4'>Password Generator</h1>

        <div className='my-8 rounded-lg flex shadow overflow-hidden px-8'>
          <input 
          type="text" 
          placeholder='password'
          value={password}
          className='py-2 px-4 text-center w-full outline-none text-black'
          ref={passRef}
          readOnly

          />
          <button className='bg-blue-600 py-2 px-4 text-white shrink-0 hover:bg-blue-400'
          onClick={() => {
            copyPassToClipboard()
            copied()
          }}
          >{copy}</button>
        </div>


        <div className='flex gap-x-2'>

          <div className='flex items-center gap-x-2 '>
            <input
             type="range" 
             min={6}
             max={50}
             value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
             />
             <label >Length: {length} </label>
          </div>
          <div className='flex items-center gap-x-2 '>
            <input
             type="checkbox" 
             defaultChecked = {numberAllowed}
             onChange={() => {
              setNumberAllowed((prev) => !prev)
             }}
             />
             <label >Numbers </label>
          </div>
          <div className='flex items-center gap-x-2 '>
            <input
             type="checkbox" 
             defaultChecked = {charAllowed}
             onChange={() => {
              setCharAllowed((prev) => !prev)
             }}
             />
             <label>Characters</label>
          </div>

        </div>

    </div>
  )
}

export default App
