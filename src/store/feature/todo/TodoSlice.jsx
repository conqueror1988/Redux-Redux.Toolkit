import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

// ! id eklemek icin npm insall uuid    kurduk  ve import { v4 } from "uuid" ettik.

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: v4(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      //! asagidaki ,1 durumu, aslinda bir karakter silmesini isteyecegim.
      state.todos.splice(action.payload.id, 1);
    },
    todoCompleted: (state, action) => {
      state.todos[action.payload].completed =
        !state.todos[action.payload].completed;
    },
  },
});

// ! export lamayi unutmayalim.
export const todoReducer = todoSlice.reducer;
export const { addTodo, removeTodo, todoCompleted } = todoSlice.actions;
