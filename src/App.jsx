import { useState } from 'react'
import './App.css'
import Collaborate from './Component/Collaborate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Collaborate></Collaborate>
    </>
  )
}

export default App
