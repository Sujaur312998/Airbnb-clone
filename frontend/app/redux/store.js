// store.js
import { configureStore } from '@reduxjs/toolkit';
import filter from '@/app/redux/filterSlice' 
const store = configureStore({
  reducer: {
    filter, 
  },
});

export default store;