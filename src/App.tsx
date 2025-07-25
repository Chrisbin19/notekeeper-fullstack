import './App.css';
import React,{useState}from 'react';

function App(){
  type Note={
    id:number,
    title:string,
    content:string,
  };
  const[notes,setNotes]=useState<Note[]>([
    {
      id:1,
      title:"Note 1",
      content:"This is the first note",
    },
    {
      id:2,
      title:"Note 2",
      content:"This is the second note",
    },
    {
      id:3,
      title:"Note 3",
      content:"This is the third note",
    },
    {
      id:4,
      title:"Note 4",
      content:"This is the fourth note", 
    },
    {
      id:5,
      title:"Note 5",
      content:"This is the fifth note",
    },
    {id:6,
      title:"Note 6",
      content:"This is the sixth note",
    },
  ]);
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