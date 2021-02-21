import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';

function Todo({ todo, toggleComplete, removeTodo, onEditMode }) {
  return (
    <ListItem style={{ width: '25%', margin: 'auto' }}>
      <Checkbox
        checked={todo.complete === true}
        onClick={() => toggleComplete(todo.id)}
      />
      <Typography
        style={{ textDecoration: todo.complete ? 'line-through' : null }}
        variant='body1'
      >
        {todo.todo}
      </Typography>
      <IconButton onClick={() => removeTodo(todo.id)}>
        <CloseIcon />
      </IconButton>
      <IconButton onClick={() => onEditMode(todo.id)}>
        <EditIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
