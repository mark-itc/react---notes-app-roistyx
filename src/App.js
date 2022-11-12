
import './App.css';
import {useState} from 'react'
import NotesList from './components/NotesList.js'

function App() {
  const [notes, setNotes] = useState([])
  const [name, setInput] = useState([])


  const onInputChangeMethod = (e) => {
    const currentInput = e.target.value;
    setInput(currentInput);
  }  
  
  function handleAddNote (e) {
    const dateToFormat = new Date().toString()
    if (name === "") return
    console.log(e)
    setNotes(prevNote => {
        return [...prevNote, {key: name, date: dateToFormat, name: name}]
    })
  }
  
  return (
    <>
    <div className="top-section">
      <div className="main-content">
        <h1>My Notes</h1>
        <div className="form-group">
          <textarea className="input-control" onChange={onInputChangeMethod} type="textarea"/>
        </div> 
        
          <button className="input-control" onClick={handleAddNote}>Add</button>
      </div>
      </div>
      <div className="flex-container">
      <NotesList notes={notes}/>
      </div>
      
    </>
  );
}

export default App;
