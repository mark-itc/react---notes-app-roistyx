import './App.css';
import {useState, useRef} from 'react'
import NotesList from './components/NotesList'

function App() {
  const [notes, setNotes] = useState([])
  const noteRefText = useRef()

  function checkToDelete(key) {
    const newNotes = [...notes]
    const note = newNotes.find(note => note.key === key)
    note.toDelete = !note.toDelete
    if (window.confirm("Do you really want to delete?")) {
      const updatedNotes = notes.filter(note => !note.toDelete)
      setNotes(updatedNotes) 
    }
  }
  
  function handleAddNote () {
    const name = noteRefText.current.value
    const dateToFormat = new Date().toString()

    if (name === "") return
    setNotes(prevNote => {
        return [...prevNote, {key: name, name: name, date: dateToFormat, toDelete: false}]
    })
    noteRefText.current.value = null
  }
    
  return (
    <>
      <div className="top-section">
        <div className="main-content">
          <h1>My Notes</h1>
            <div className="form-group">
              <textarea ref={noteRefText}className="input-control"         type="textarea"/>
            </div> 
          <button 
            onClick={handleAddNote} className="input-control">
              Add
          </button>
        </div>
      </div>
      <div className="flex-container"> 
        <NotesList notes={notes} checkToDelete={checkToDelete}/>
      </div>
    </>
  );
}

export default App;
