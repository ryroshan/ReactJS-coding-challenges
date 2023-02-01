import React from 'react'
import './style.css'

function Header() {
  return (
    <div className='header'>
        <img className='logo' src='/home/ryroshan9/ReactJS-coding-challenges/reactchallenge/src/components/images/img.webp'/>
        <nav>
            <ul>
                <li>Service</li>
                <li>Product</li>
                <li>Document</li>
                <li>Pricing</li>
            </ul>
        </nav>
        <button>Contact</button>
    </div>
  )
}

export default Header