import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count -= action.payload;
        },
    },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;