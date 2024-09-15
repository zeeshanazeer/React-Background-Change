import { useState } from "react"


function App() {
  const [color , setcolor] =useState();

  return (
    <div  className="w-full h-screen duration-200">
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setcolor("red")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{background: "red"}}>Red</button>
          <button onClick={() => setcolor("green")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{background: "green"}}>Green</button>
          <button onClick={() => setcolor("blue")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{background: "blue"}}>Blue</button>
          <button onClick={() => setcolor("yellow")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{background: "Yellow"}}>Yellow</button>
          <button onClick={() => setcolor("black")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{background: "black"}}>black</button>
          <button onClick={() => setcolor("white")} className="outline-none px-4 rounded-full text-black shadow-lg" style={{background: "white"}}>White</button>

        </div>
      </div>
    </div>
    
  )
}

export default App
