import React, {useId, useState} from 'react'
import useFetch from '../assets/hooks/useFetch'

function Accordion() {
    const {posts} = useFetch('https://jsonplaceholder.typicode.com/posts');
    const [show, setShow] = useState(false);
  return (
    <section>
        {posts.map(post=>(
            <div style={{width: '500px'}} key={post.id}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <p onClick={()=> setShow(post.id)} style={{marginRight: '10px', fontSize: 'larger', cursor: 'pointer'}}>{show === post.id? '-' : '+'}</p>
                <h3>{post.title.length === '20' ? post.title : post.title.slice(0, 20)}</h3>
                </div>
                <p>{show === post.id &&  post.body}</p>
            </div>
            
        ))}
    </section>
  )
}

export default Accordion