import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-green-300">
      Hello Vite World
    </div>
  )
}

export default App
