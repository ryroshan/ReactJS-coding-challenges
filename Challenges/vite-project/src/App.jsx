import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Link, Route, Routes} from 'react-router-dom'
import './App.css'
import { explorer } from './data/folderData'
import Explorer from './components/Explorer';
import AppRouting from './routing-components/AppRouting'

function App() {
  const access___Key = {
    admin__Access : 'admin__Access',
    normal___Access: 'normal___Access',
  }

const current__User  = access___Key.admin__Access;


  const [explorerData, setExplorerData] = useState(explorer);

  return (  
    <div>
    <div style={{display: 'flex', gap: '10px', padding: '20px'}} >
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
      </div>
      <AppRouting />
      {/* <Explorer explorer={explorerData}/>
      <div style={{position: 'absolute', top: '0', left: '400px'}}>
        <div> React JS demo </div>
      <h3>Visual Studio Explorer</h3>
      </div> */}
    </div>  
  )
}

export default App
