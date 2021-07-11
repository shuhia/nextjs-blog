import React from "react";
import { CustomLink as Link } from "./CustomLink";

const TodoColumn = (props) => {
  const { type, completed } = props;
  return <td className={completed ? "completed" : ""}>{type}</td>;
};

const Todo = (props) => {
  const todo = props.todo;
  const { todo_completed, todo_description, todo_responsible, todo_priority } =
    todo;

  return (
    <tr>
      <TodoColumn
        type={todo_description}
        completed={todo_completed}
      ></TodoColumn>
      <TodoColumn
        type={todo_responsible}
        completed={todo_completed}
      ></TodoColumn>
      <TodoColumn type={todo_priority} completed={todo_completed}></TodoColumn>
      <TodoColumn type={todo_completed} completed={todo_completed}></TodoColumn>
      <td>
        <Link to={"todolist/edit/" + props.todo._id}>Edit</Link>
      </td>
    </tr>
  );
};

export default Todo;
