import React from "react";

import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  todoText: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.todoText}
    </li>
  );
};

export default TodoItem;
