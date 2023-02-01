import React from 'react'
import './toggle.css'
function ToggleM({closeToggle}) {
  return (
    <div className='modal__background'>
        <div className='modal__conatiner'>
            <div className='modal__closeBtn'>
            <button onClick={()=>closeToggle(false)}> X </button>
            </div>
            <div className='title'>
                <h1>Are you sure you want to continue?</h1>
            </div>
            <div className='body'>
                <p>The next page is awsome. you should click on continue...</p>
            </div>
            <div className='footer'>
                <button>continue</button>
                <button className='cancel' onClick={()=> closeToggle(false)}>cancel</button>
            </div>
        </div>
    </div>
  )
}

export default ToggleM