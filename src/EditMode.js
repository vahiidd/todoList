import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function EditMode({ todo, editTodo }) {
  const [input, setInput] = useState(todo.todo);
  function submitHandler(e) {
    e.preventDefault();
    editTodo(todo.id, input);
  }
  return (
    <form>
      <TextField value={input} onChange={(e) => setInput(e.target.value)} />
      <Button
        disabled={!input.trim()}
        type='submit'
        color='primary'
        onClick={(e) => submitHandler(e)}
      >
        Edit
      </Button>
    </form>
  );
}

export default EditMode;
