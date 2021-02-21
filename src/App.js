import { Typography } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  function addTodo(todo) {
    const newTodo = {
      todo,
      id: Math.random().toString(),
      complete: false
    };
    setTodos([...todos, newTodo]);
  }

  function onEditMode(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    setEditIndex(index);
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
    setEditIndex(-1);
  }

  return (
    <div className='App'>
      <Typography style={{ padding: 16 }} variant='h1'>
        React Todo
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        editTodo={editTodo}
        onEditMode={onEditMode}
        editIndex={editIndex}
      />
    </div>
  );
}

export default App;
