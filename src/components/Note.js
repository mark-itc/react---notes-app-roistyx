import React from 'react'

function Note({note, checkToDelete} ) {

    function handleNoteClick() {
        checkToDelete(note.key)
        console.log(note.key)
      }
   
    return ( 
    <div className="flex-row">
        <input type="checkbox" onChange={handleNoteClick} checked={note.toDelete}/>
        <div className="note-time"> 
            {note.date}
        </div> 
        <div className="note-content">
            {note.name}
        </div>
    </div>
  )
}

export default Note
