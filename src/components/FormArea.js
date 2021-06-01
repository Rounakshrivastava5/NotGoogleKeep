import { Fab, Paper, TextField } from '@material-ui/core'
import React, { useState }  from 'react'
import AddIcon from '@material-ui/icons/Add';

function FormArea({addNote}) {
    const  [note, setNote]= useState({
        title:"",
        content: "",
    });
    function clickHandler(){
        addNote(note);
        setNote({
            title:"",
            content: "",  
        })
    }
    function changeHolder(event){
        const {name, value} = event.target
        setNote(preValues =>{
            return{
                ...preValues,
                [name]: value
            }
        })
    }
    console.log(note);
    return (
        <Paper style={{padding:"25px 35%", margin:"10px 10%"}}>
            <form >
                <TextField
                onChange={changeHolder}
                name="title" value={note.title} label="Title" 
                fullWidth
                autoComplete="off" />
                <TextField 
                onChange={changeHolder}
                name="content" value={note.content} label="Content"
                multiline rows={2}
                fullWidth
                autoComplete="off" 
                 />

                
            </form>
            <Fab inClick={clickHandler} style={{margin:"20px" , display: "block", marginLeft:"55px",marginRight:"50px"}}>
                <AddIcon />
            </Fab>


        </Paper>
    )
}

export default FormArea
