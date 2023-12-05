import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './slice';
import { filterReducer } from './filter';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    filter: filterReducer,
  },
});

export default store ;