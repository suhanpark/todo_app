import { Button, List, Avatar, ListItem, ListItemAvatar, ListItemText, Modal } from '@mui/material'
import React, { useState } from 'react'
import './Todo.css';
import db from './firebase';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, {merge: true});

    setOpen(false);
  }

  return (
    <>
    <Modal
      open={open}
      onClose={e => setOpen(false)}
    >
      <div className={classes.paper}>
        <h1>Edit</h1>
        <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
        <Button onClick={e => updateTodo()}>Update</Button>
      </div>
    </Modal>
    <List>
        <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="deadline ⏰"/>
        </ListItem>
        <button onClick={e => setOpen(true)}>Edit</button>
        <DeleteOutlineIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
    </List>
    </>
  )
}

export default Todo

