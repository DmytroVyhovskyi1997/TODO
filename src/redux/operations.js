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
    async (todoId, thunkAPI) => {
      try {
        const res = await axios.delete(`/todos/${todoId}`);
        return res.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );