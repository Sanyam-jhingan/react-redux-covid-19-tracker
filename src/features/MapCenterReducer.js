import { createSlice } from "@reduxjs/toolkit"

export const mapCenterSlice = createSlice({
  name: "mapCenter",
  initialState: {
    value: {
      lat: 34.80746,
      lng: -40.4796,
    },
  },
  reducers: {
    setMapCenter: (state, action) => {
      state.value = {
        lat: action.payload.latitude,
        lng: action.payload.longitude,
      }
    },
  },
})

export default mapCenterSlice.reducer
export const { setMapCenter } = mapCenterSlice.actions
