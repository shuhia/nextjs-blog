import React from "react";
import TodosContext from "./TodosContext";
import { useContext } from "react";

const UseTodosContext = () => {
  return useContext(TodosContext);
};

export default UseTodosContext;
