import React from 'react'

function Posts({posts,loading}) {
    if(loading){
        return <h1 style={{textAlign: 'center'}}>Loadin'...</h1>
    }
console.log(posts);
  return (
    <ul style={{textAlign: 'center'}}>
        {posts.map(post=>(
            <li key={post.id}>{post.title}</li>
        ))}
    </ul>
  )
}

export default Posts