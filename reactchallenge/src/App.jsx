import { useState } from 'react'
import './App.css'
import Header from './components/header/Header';
import ToggleM from './components/toggle-modal';
function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <h1 style={{background: 'orange', textAlign: 'center'}}>React-Challenges </h1>
      <Header />
      <hr></hr>
      <hr></hr>
      <div style={{textAlign: 'center'}}>
      <h2>Click button to Open a Modal</h2>
      <button onClick={()=>setToggle(true)}>Click Me!</button>
      </div>
      {toggle && <ToggleM closeToggle={setToggle}/>}
    </div>
  )
}

export default App
