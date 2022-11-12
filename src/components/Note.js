import React from 'react'
import '../App.css';

function Note({ note }) {
    const {name, date} = note
    
    return ( 
    <div className="flex-row">
        <div className="note-time"> 
            {date}
        </div> 
        <div className="note-content">
            {name}
        </div>
        
    </div>
  )
}

export default Note
