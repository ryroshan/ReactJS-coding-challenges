import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useFetch from './assets/hooks/useFetch'
import Accordion from './components/Accordion';
import Search from './components/Search';

function App() {
  const {error, posts, loading} = useFetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <div className="App">
      <Search />
      <br />
      <br />
      <Accordion />
    </div>
  )
}

export default App
