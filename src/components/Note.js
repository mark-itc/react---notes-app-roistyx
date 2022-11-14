import React from 'react'
import '../App.css';

function Note({note, checkToDelete} ) {

    function handleNoteClick() {
        checkToDelete(note.key)
      }
   
    return ( 
    <div className="flex-row">
        <input type="checkbox" className="checkbox" onChange={handleNoteClick} checked={note.toDelete}/>
        <div className="note-time"> 
            {note.date}
        </div> 
        <div className="note-time"> 
            {note.title}
        </div> 
        <div className="note-content">
            {note.name}
        </div>
    </div>
  )
}

export default Note
