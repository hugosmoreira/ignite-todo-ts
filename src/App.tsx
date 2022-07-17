import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Tasks content={''} isCompleted={false} />
    </div>
  )
}

export default App
