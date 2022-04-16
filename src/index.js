import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import countriesSlice from "./features/CountriesReducer"
import CountrySlice from "./features/CountryReducer"
import loadingSlice from "./features/LoadingReducer"
import mapCenterSlice from "./features/MapCenterReducer"
import mapZoomReducer from "./features/mapZoomReducer"

const store = configureStore({
  reducer: {
    countries: countriesSlice,
    country: CountrySlice,
    loading: loadingSlice,
    mapCenter: mapCenterSlice,
    mapZoom: mapZoomReducer,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
