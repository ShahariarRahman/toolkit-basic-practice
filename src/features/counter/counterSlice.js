import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {},
});