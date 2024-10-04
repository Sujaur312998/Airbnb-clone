import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  minPrice: 0,
  maxPrice: 0,
  values: [0, 0],
  items: 0
};

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    f_minPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    f_maxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    f_value: (state, action) => {
      state.values = action.payload;
    },
    f_items: (state, action) => {
      state.items = action.payload;
    },

  },
});

export const { f_minPrice, f_maxPrice, f_value, f_items } = filter.actions;
export default filter.reducer;