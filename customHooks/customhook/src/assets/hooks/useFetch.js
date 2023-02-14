import React, { useEffect, useState } from 'react'
import axios from 'axios';
function useFetch(url) {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        
        setLoading(true);
        setPosts([]);
        const fetchData = async()=>{
            const res = await axios.get(url);
            setPosts(res.data);
            setLoading(false)
        }
      fetchData();
        
    },[url])

  return {error, loading, posts}
}

export default useFetch