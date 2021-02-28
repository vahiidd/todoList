import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function EditMode({ todo, editTodo, checkRepeat }) {
  const [input, setInput] = useState(todo.todo);
  const [repeat, setRepeat] = useState(false);
  function editHandler() {
    editTodo(todo.id, input);
  }
  function cancelHandler() {
    editTodo(todo.id, todo.todo);
  }

  function changeHandler(e) {
    e.preventDefault();
    setInput(e.target.value);
    setRepeat(checkRepeat(e.target.value));
  }
  return (
    <form>
      <TextField value={input} onChange={changeHandler} />
      <Button
        disabled={!input.trim() || todo.todo.trim() === input.trim() || repeat}
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
