import React, { useContext } from "react";
import Provider from "react";
import { createContext, useState } from "react";

const initial = { todos: [] };

const TodosContext = createContext(initial);

export default TodosContext;
