import React from 'react'

function usePagination({postPerPage, totalPosts, paginate}) {
    console.log({postPerPage, totalPosts});
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalPosts/postPerPage); i+=1){
        pageNumbers.push(i)
    }
  return (
    <nav style={{border: '1px solid red'}}>
        <ul>{pageNumbers.map(number=>(
            <li key={number}>
                <a onClick={()=>paginate(number)}>
                    {number}
                </a>
            </li>
        ))}</ul>
    </nav>
  )
}

export default usePagination