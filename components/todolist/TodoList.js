import React, { useState, useEffect, useContext } from "react";
import UseTodosContext from "../../contexts/UseTodosContext";
import Layout from "./Layout";
import Todo from "./todo";

const Todolist = (props) => {
  const todosContext = UseTodosContext();
  console.log(todosContext);
  const { todos } = todosContext;

  return (
    <Layout>
      <div className="container"></div>
      <div style={{ marginTop: 20 }}>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos &&
              todos.map((todo, index) => <Todo todo={todo} key={index} />)}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Todolist;
