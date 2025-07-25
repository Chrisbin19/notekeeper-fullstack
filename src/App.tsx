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
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  const handleAddNote=(e:React.FormEvent)=>{
    e.preventDefault();
    console.log("Title:", title);
    console.log("Content:", content);
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