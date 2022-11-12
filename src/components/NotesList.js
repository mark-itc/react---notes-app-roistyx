import React from 'react'
import Note from './Note'

 function NotesList({ notes }) {
   
  return (
    notes.map(note => {
      return <Note key={note.key} note={note}/>
      
    })
  )
}

export default NotesList

