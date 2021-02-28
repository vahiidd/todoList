import { List } from '@material-ui/core';
import React from 'react';
import EditMode from '../EditMode';
import Todo from './Todo';

function TodoList({
  todos,
  toggleComplete,
  removeTodo,
  editTodo,
  onEditMode,
  editId,
  checkRepeat
}) {
  return (
    <List>
      {todos.map((todo) => {
        if (todo.id === editId) {
          return (
            <EditMode
              todo={todo}
              editTodo={editTodo}
              checkRepeat={checkRepeat}
            />
          );
        }
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            onEditMode={onEditMode}
          />
        );
      })}
    </List>
  );
}

export default TodoList;
