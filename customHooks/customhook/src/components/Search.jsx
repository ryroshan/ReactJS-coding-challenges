import React, { useState } from 'react'
import useFetch from '../assets/hooks/useFetch';

function Search() {
    const [filter, setFilter] = useState('');
    const {posts} = useFetch('https://jsonplaceholder.typicode.com/posts'); 

    const filterItems = posts.filter((post)=>post.title.toLocaleLowerCase().includes(filter));


  return (
    <>
    <div>Search Engin Optimizing..</div>
    <input type='text' value={filter} onChange={(e)=> setFilter(e.target.value.toLocaleLowerCase())}/>
    </>
  )
}

export default Search;