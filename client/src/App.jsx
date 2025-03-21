import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Hello from './components/Hello'
import HelloFS from './components/HelloFS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<Hello/>}/>
      <Route path="/hifromserver" element={<HelloFS/>}/>
     </Routes>
    </>
  )
}

export default App
