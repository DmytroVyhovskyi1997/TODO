import { createSlice } from "@reduxjs/toolkit";

import { fetchTodos, addTodos, deleteTodos, updateTodos } from "./operations";

import {
  handlePending,
  handleRejected,
  handleFulfilled,
  handlePushFulfilled,
  handleDeleteFulfilled,
  handleUpdateFulfilled,
} from "./initial";

const initialStateTodos = { items: [], isLoading: false, error: null };

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialStateTodos,

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, handlePending)
      .addCase(fetchTodos.fulfilled, handleFulfilled)
      .addCase(fetchTodos.rejected, handleRejected)

      .addCase(addTodos.pending, handlePending)
      .addCase(addTodos.fulfilled, handlePushFulfilled)
      .addCase(addTodos.rejected, handleRejected)

      .addCase(deleteTodos.pending, handlePending)
      .addCase(deleteTodos.fulfilled, handleDeleteFulfilled)
      .addCase(deleteTodos.rejected, handleRejected)

      .addCase(updateTodos.pending, handlePending)
      .addCase(updateTodos.fulfilled, handleUpdateFulfilled)
      .addCase(updateTodos.rejected, handleRejected);
  },
});
