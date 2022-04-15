import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        value: true,
    },
    reducers: {
        setLoading: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default loadingSlice.reducer;
export const { setLoading } = loadingSlice.actions;