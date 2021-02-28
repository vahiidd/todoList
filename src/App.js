import { Typography } from '@material-ui/core';
import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  function checkRepeat(value) {
    return todos.some((todo) => todo.todo.trim() === value.trim());
  }

  function addTodo(todo) {
    const newTodo = {
      todo,
      id: uuid(),
      complete: false
    };
    setTodos([...todos, newTodo]);
  }

  function onEditMode(id) {
    setEditId(id);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id, editValue) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            todo: editValue
          };
        }
        return todo;
      })
    );
    setEditId(null);
  }

  return (
    <div className='App'>
      <Typography style={{ padding: 16 }} variant='h1'>
        React Todo
      </Typography>
      <TodoForm addTodo={addTodo} checkRepeat={checkRepeat} />
      <TodoList
        checkRepeat={checkRepeat}
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        editTodo={editTodo}
        onEditMode={onEditMode}
        editId={editId}
      />
    </div>
  );
}

export default App;
