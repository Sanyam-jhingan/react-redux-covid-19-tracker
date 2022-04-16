import { setCountries } from "../features/CountriesReducer"
import { addCountry } from "../features/CountriesReducer"
import { setLoading } from "../features/LoadingReducer"

export async function dataByCountries(dispatch) {
  try {
    const response = await fetch("https://disease.sh/v3/covid-19/countries")
    const data = await response.json()
    dispatch(setCountries(data))
  } catch (error) {
    console.log(error)
  }
}

export async function worldwideData(dispatch) {
  try {
    const response = await fetch("https://disease.sh/v3/covid-19/all")
    const data = await response.json()
    data["country"] = "Worldwide"
    data["countryInfo"] = {
      "lat": 34.80746,
      "long": -40.4796,
    }
    dispatch(addCountry(data))
    dispatch(setLoading(false))
  } catch (error) {
    console.log(error)
  }
}
