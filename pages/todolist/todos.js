import React, { useState, useEffect } from "react";
import { CustomLink as Link } from "../../components/todolist/CustomLink";
import axios from "axios";
import Layout from "../../components/todolist/Layout";

const Todo = (props) => (
  <tr>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_description}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_responsible}
    </td>
    <td className={props.todo.todo_completed ? "completed" : ""}>
      {props.todo.todo_priority}
    </td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
);

const TodoListWrapper = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/todo-ivlyi/service/Todo/incoming_webhook/todos"
      )
      .then((response) => {
        setTodos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function todoList() {
    return todos.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  return (
    <Layout>
      <div style={{ marginTop: 20 }}>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{todoList()}</tbody>
        </table>
      </div>
    </Layout>
  );
};

export default TodoListWrapper;
