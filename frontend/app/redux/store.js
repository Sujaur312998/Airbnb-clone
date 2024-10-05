// store.js
import { configureStore } from '@reduxjs/toolkit';
import filter from '@/app/redux/filterSlice'
import search from '@/app/redux/searchSlice'

const store = configureStore({
  reducer: {
    filter, search
  },
});

export default store;