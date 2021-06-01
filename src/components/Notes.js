import { Paper } from '@material-ui/core'
import React from 'react'

const Notes = () => {
    return (
        <Paper style={{
            minWidth:"200", 
            minHeight:"100px", 
            padding:"10px", 
            margin:"20px",
            display:"inline-flex"
            
            }}>
            <div>
            <h1>Title</h1>
            <p>Content</p>
            </div>
        
        </Paper>
    )
}

export default Notes
