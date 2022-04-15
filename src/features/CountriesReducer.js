import { createSlice} from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        value: [],
    },
    reducers: {
        setCountries: (state, action) => {
            state.value = action.payload;
        },
        addCountry: (state, action) => {
            state.value = [action.payload, ...state.value]
        },
    },
});

export default countriesSlice.reducer;
export const { setCountries, addCountry } = countriesSlice.actions;
