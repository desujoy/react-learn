import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });
  function handleSetNewNote(event) {
    setNewNote({
      ...newNote,
      [event.target.name]: event.target.value,
    });
  }
  function addNote(event) {
    event.preventDefault();
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    setNewNote({
      title: "",
      content: "",
    });
  }
  function handleDelete(event) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== Number(event.target.id);
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        addNote={addNote}
        newNote={newNote}
        setNewNote={handleSetNewNote}
      />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          handleDelete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
