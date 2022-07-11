import React , { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import './App.css';
import db from './firebase'
import firebase from 'firebase'



function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);
  

  const addTodo = (event) => {
    // this will fire off when the button's clicked
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1> TODO App 🚀</h1>
      
      <form>
        
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add
        </Button>
      </form>

      <ul>
          {todos.map(todo => (
            <Todo todo={todo}/>
          ))}
      </ul>
    </div>
  );
}

export default App;
