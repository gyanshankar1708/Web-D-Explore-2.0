import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)


  return (
    <div className='body'>
      <div className="outer">
        <div className="inner">
          <h1>{count}</h1>
        </div>
        <div className="inner">
          <button onClick={()=>{
            if (count>0){
              setCount(count-1);
            }
          }}>-</button>
          <button onClick={()=>{
            setCount(0)
          }}>
            <img src="./reset.png" alt="" />
          </button>
          <button onClick={()=>{
            setCount(count+1);
          }}>+</button>
        </div>
      </div>      
    </div>
  )
}

export default App
