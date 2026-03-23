import React, { useEffect } from 'react'
import Loader from './components/Loader'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {

  const [load, setLoad] = useState(true);
  const [name, setName] = useState("Gyan");

  useEffect(() => {
    console.log(name)
  }, [name])

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      {/* Conditional Rendering

      {/*Terniary Operator  */}
      {/* {load?<Loader/>:<h1>Data loaded</h1>} */}

      {/* <button onClick={()=>{
        setLoad(false)
      }}>Load data</button> */}

      {/* Using Conditional and && Operator */}

      {/* {load && <Loader/>}  */}

      {/* Event handling in React */}
      {/* onClick Event Handling */}
      {/* <button onClick={()=>{
        alert("Web D Explore 2.0 ")
      }}> Click me</button>

      // onChange Event handling
      <input type="text" value={name} onChange={handleChange} /> */}

      {/* Routing in React */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        
      </BrowserRouter>

    </div>
  )
}

export default App
