import { createSlice } from "@reduxjs/toolkit";

export const CountrySlice = createSlice({
    name: "Country",
    initialState: {
        value: 'Worldwide',
    },
    reducers: {
        setCountry: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default CountrySlice.reducer;
export const { setCountry } = CountrySlice.actions;

