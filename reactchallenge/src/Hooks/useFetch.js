import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useFetch(url) {
const [posts, setPosts] = useState([]);
const [loading,setloading] = useState(false);
const [error, setError] = useState('');

useEffect(()=>{
    const fetchData = async()=>{
        setloading(true);
        setPosts([])
        const res = axios.get(url);
        setPosts(res.data);
        setloading(false)
    }
    fetchData();
}, [url])
  return {posts, loading, error}
}

export default useFetch