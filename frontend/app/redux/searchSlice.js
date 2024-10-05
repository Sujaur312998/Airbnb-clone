import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    startDate: null,
    endDate: null,
    checkInDate:'',
    checkOutDate:'',
};

const search = createSlice({
    name: 'search',
    initialState,
    reducers: {
        s_startDate: (state, action) => {
            state.startDate = action.payload;
        },
        s_endDate: (state, action) => {
            state.endDate = action.payload;
        },
        s_checkIn: (state, action) => {
            state.checkInDate = action.payload;
        },
        s_checkOut: (state, action) => {
            state.checkOutDate = action.payload;
        }

    },
});

export const { s_startDate, s_endDate, s_checkIn, s_checkOut } = search.actions;
export default search.reducer;