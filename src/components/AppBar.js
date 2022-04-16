import React from "react"
import Toolbar from "@mui/material/Toolbar"
import { TextField } from "@mui/material"
import { Autocomplete } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useSelector, useDispatch } from "react-redux"
import { dataByCountries, worldwideData } from "../Api/Api"
import { setCountry } from "../features/CountryReducer"
import { CircularProgress } from "@mui/material"
import { setMapCenter } from "../features/MapCenterReducer"
import { setMapZoom } from "../features/mapZoomReducer" 

function Header() {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries.value)
  const country = useSelector(state => state.country.value)
  const isLoading = useSelector(state => state.loading.value)
  React.useEffect(() => {
    async function fetchData() {
      await dataByCountries(dispatch)
      await worldwideData(dispatch)
    }
    fetchData()
    // return () => {
    //   dispatch({ type: "setCountries", payload: [] })
    // }
  }, [dispatch])

  console.log(countries)

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          bgcolor: "white",
          borderBottom: 1,
          borderColor: "divider",
          pt: 0.5,
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Covid-19 Tracker
        </Typography>
        <Autocomplete
          value={isLoading ? null : country}
          disablePortal
          disableClearable
          autoHighlight
          onChange={(event, value) => {
            console.log("country:", value)
            dispatch(setCountry(value))
            const latitude  = countries.filter(item => item.country === value)[0].countryInfo.lat
            const longitude = countries.filter(item => item.country === value)[0].countryInfo.long
            console.log("latitude:", latitude)
            console.log("longitude:", longitude)
            dispatch(setMapCenter({latitude, longitude}))
            //dispatch(setMapCenter(countries.find(c => c.country === value).countryInfo.lat, countries.find(c => c.country === value).countryInfo.long))
            value === "Worldwide" ? dispatch(setMapZoom(2)) : dispatch(setMapZoom(4))
            event.target.value = value
          }}
          options={countries.map(option => option.country)}
          renderInput={params => (
            <TextField
              sx={{ width: "200px" }}
              {...params}
              label="Choose a country"
              InputProps={{
                ...params.InputProps,
                type: "search",
                endAdornment: (
                  <React.Fragment>
                    {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>
    </React.Fragment>
  )
}

export default Header
