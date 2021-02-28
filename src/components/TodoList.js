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
  editIndex,
  checkRepeat
}) {
  return (
    <List>
      {todos.map((todo, index) => {
        if (index === editIndex) {
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
