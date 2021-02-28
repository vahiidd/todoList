import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function EditMode({ todo, editTodo, checkRepeat }) {
  const [input, setInput] = useState(todo.todo);
  function editHandler() {
    editTodo(todo.id, input);
  }
  function cancelHandler() {
    editTodo(todo.id, todo.todo);
  }

  function changeHandler(e) {
    setInput(e.target.value);
  }
  return (
    <form>
      <TextField value={input} onChange={changeHandler} />
      <Button
        disabled={
          !input.trim() ||
          todo.todo.trim() === input.trim() ||
          checkRepeat(input)
        }
        type='submit'
        color='secondary'
        onClick={editHandler}
      >
        Edit
      </Button>
      <Button onClick={cancelHandler}>Cancel</Button>
    </form>
  );
}

export default EditMode;
