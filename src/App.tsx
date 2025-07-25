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
    setNotes([newNote,...notes]);
    setTitle("");
    setContent(""); // Add the new note to the beginning of the notes array
  }
  const newNote:Note={
    id:notes.length+1,
    title: title,
    content: content,
  }
  const [selectedNote,setSelectedNode]=useState<Note | null >(null);
  const handleNoteClick=(note:Note)=>{
    setSelectedNode(note);
    setTitle(note.title);
    setContent(note.content);
  }
  const handleUpdateNote=(event:React.FormEvent)=>{
    event.preventDefault();
    if(!selectedNote){
      return;
    }
    const updatedNote: Note={
      id: selectedNote.id,
      title: title,
      content: content,
    };
    const updatedNotes = notes.map((note) =>
      note.id === selectedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setSelectedNode(null);
    setTitle("");
    setContent(""); 
  }
  const handleCancel=()=>{
    setSelectedNode(null);
    setTitle("");
    setContent("");
  }

  return(
  <div className='app-container'>
    <form onSubmit={
      (event)=>(
        selectedNote ? handleUpdateNote(event) : handleAddNote(event))
    } className='note-form'>
      <input 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      placeholder='Title' required/>
      <textarea 
        rows={10}
        value={content}
        onChange={(e)=>setContent(e.target.value) }
      placeholder='Content' required/>
      {
        selectedNote ? (
          <div className="edit-buttons">
            <button type='submit'>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ):(
             <button type='submit'>Add Note</button>
        )
      }
     
    </form>
    <div className='notes-grid'>
      {notes.map((note)=>(
           <div key={note.id} className='notes-item' onClick={()=>handleNoteClick(note)}>
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