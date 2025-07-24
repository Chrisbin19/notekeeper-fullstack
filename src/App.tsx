import './App.css';
import React from 'react';

function App(){
  return(
  <div className='app-container'>
    <form className='note-form'>
      <input placeholder='Title' required/>
      <input placeholder='Content' required/>
      <button type='submit'>Add Note</button>
    </form>
    <div className='notes-grid'>
      <div className='notes-item'>
        <div className='notes-header'>
          <button>
            X
          </button>
          </div>
          <h2>Note Title</h2>
          <p>Note content</p>
          
      </div>
    </div>
  </div>
  )
}
export default App;