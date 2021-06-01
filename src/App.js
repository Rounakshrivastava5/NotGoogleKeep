import React, { useState } from "react";
import Footer from "./components/Footer";
import FormArea from "./components/FormArea";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App(){
    const [notes, setNotes] = useState([])
    console.log(notes);
    function addNote(note){
        setNotes(preNotes =>{
            return [...preNotes, notes] 
        })
    }
    return(
        <div>
        <Header />
        <FormArea addNote={addNote} />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Footer />
        </div>
    )
    
}
export default App;
