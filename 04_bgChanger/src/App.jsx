import { useState } from 'react'

function App() {
  const [color, setColor] = useState("grey")

  return (
    
    <div className="w-full h-screen duration-1000"
    style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
       <button className='px-4 py-2 rounded-full' style={{backgroundColor : "red"}} onClick={() => setColor("red")}>Red</button>
       <button className='px-4 py-2 rounded-full' style={{backgroundColor : "green"}} onClick={() => setColor("green")}>Green</button>
       <button className='px-4 py-2 rounded-full' style={{backgroundColor : "blue"}} onClick={() => setColor("blue")}>Blue</button>
       <button className='px-4 py-2 rounded-full' style={{backgroundColor : "orange"}} onClick={() => setColor("orange")}>Orange</button>
       <button className='px-4 py-2 rounded-full bg-black text-white'  onClick={() => setColor("black")}>Black</button>
       <button className='px-4 py-2 rounded-full' style={{backgroundColor : "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
       <button className='px-4 py-2 rounded-full' style={{backgroundColor : "white"}} onClick={() => setColor("white")}>White</button>
        
       </div>
       </div>

      </div>

  )
}

export default App
