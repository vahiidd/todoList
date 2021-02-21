import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function TodoForm({addTodo}) {
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(input)
    setInput('');
  }

  return (
    <form>
      <TextField
        label='Task'
        type='text'
        name='task'
        value={input}
        onChange={(e) => setInput(e.target.value.trimStart())}
      />
      <Button
        disabled={!input.trim()}
        type='submit'
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
