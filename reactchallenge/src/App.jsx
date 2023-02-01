import { useState } from 'react'
import './App.css'
import Header from './components/header/Header';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 style={{background: 'orange', textAlign: 'center'}}>React-Challenges </h1>
      <Header />
    </div>
  )
}

export default App
