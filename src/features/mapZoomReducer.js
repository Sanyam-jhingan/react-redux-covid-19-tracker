import { createSlice } from "@reduxjs/toolkit";

export const mapZoomSlice = createSlice({
    name: "mapZoom",
    initialState: {
        value: 2,
    },
    reducers: {
        setMapZoom: (state, action) => {
            state.value = action.payload;
        }
    },
});

export default mapZoomSlice.reducer;
export const { setMapZoom } = mapZoomSlice.actions;