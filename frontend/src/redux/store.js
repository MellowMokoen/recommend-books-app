// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
