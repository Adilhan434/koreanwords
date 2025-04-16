import React from 'react'
import { useState } from 'react'
import './App.css'
import Words from './components/words.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Words/>
    </div>
    </>
  )
}

export default App;
