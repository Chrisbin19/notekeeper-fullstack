import './App.css';
import React,{useState}from 'react';

function App(){
  type Note={
    id:number,
    title:string,
    content:string,
  };
  
  const[notes,setNotes]=useState<Note[]>([]);
  
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  const handleAddNote=(e:React.FormEvent)=>{
    e.preventDefault();
    console.log("Title:", title);
    console.log("Content:", content);
    setNotes([newNote,...notes]);
    setTitle("");
    setContent(""); // Add the new note to the beginning of the notes array
  }
  const newNote:Note={
    id:notes.length+1,
    title: title,
    content: content,
  }
  return(
  <div className='app-container'>
    <form onSubmit={handleAddNote} className='note-form'>
      <input 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      placeholder='Title' required/>
      <textarea 
        rows={10}
        value={content}
        onChange={(e)=>setContent(e.target.value) }
      placeholder='Content' required/>
      <button type='submit'>Add Note</button>
    </form>
    <div className='notes-grid'>
      {notes.map((note)=>(
           <div key={note.id} className='notes-item'>
        <div className='notes-header'>
          <button>
            X
          </button>
          </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>

      </div>
        ))}
    </div>
   
  </div>
  )
}
export default App;