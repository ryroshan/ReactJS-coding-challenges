import React, { useState } from 'react'

function Explorer({explorer}) {
    const [toggle, setToggle] = useState(false);
    const [visi, setVisbile] = useState({
        visible: false,
        isFolder: false
    });

    function handleNewFolder(e, isFolder){
        e.stopPropagation();
        setVisbile({
            visible: true,
            isFolder
        })
    }

    function addKeyPress(e){
        if(e.keyCode === 13 && e.target.value){
            
            setVisbile({...visi, visible: false})
        }
    }

    if(explorer.isFolder){
    return (
        <>
        <div style={{display: 'flex'}} onClick={()=>setToggle(!toggle)}>
        <span>📁{explorer.name}</span> 
        <div style={{marginLeft: '20px'}}>
            <button onClick={(e)=>handleNewFolder(e, true)}>Folder + </button>
            <button onClick={(e)=> handleNewFolder(e, false)}>File +</button>
        </div>
        </div>
        <div style={{display: toggle ? 'flex': 'none', flexDirection: 'column', paddingLeft: '15px'}}>
            {
                visi.visible && (
                    <div>
                        <span>{visi.isFolder ? '📁' : '🗀'}</span>
                        <input type='text' onKeyDown={addKeyPress} onBlur={()=>setVisbile({...visi, visible: false})} autoFocus/>
                    </div>
                )
            }
            {explorer.items.map((item)=>{
                return <Explorer explorer={item}/>
        })}
        </div>
        </>
    ) 
  }else{
    return <span>🗀{explorer.name}</span>
  }
}

export default Explorer