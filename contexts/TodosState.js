import React, { useState, useEffect } from "react";
import TodosContext from "./TodosContext";
import axios from "axios";

const TodosState = (props) => {
  const [todos, setTodos] = useState();
  const values = { todos, setTodos, updateTodos };

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
  function updateTodos() {
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
  }
  return (
    <TodosContext.Provider value={values}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosState;
