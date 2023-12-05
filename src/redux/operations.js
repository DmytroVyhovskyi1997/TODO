

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = `https://jsonplaceholder.typicode.com/`;

axios.defaults.baseURL = BASE_URL;

export const fetchTodos = createAsyncThunk(
  'todos/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/todos/?_limit=8');
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addTodos = createAsyncThunk(
  'todos/addTodos',
  async (todo, thunkAPI) => {
    try {
      const res = await axios.post('/todos', todo);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTodos = createAsyncThunk(
  'todos/deleteTodos',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/todos/${id}`);
      return id; 
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateTodos = createAsyncThunk(
  'todos/updateTodos',
  async ({ id, title }, thunkAPI) => {
    try {
      const res = await axios.put(`/todos/${id}`, { title });
      return { id, title };  // Return both id and title
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);