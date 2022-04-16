import React from "react"
import { Box } from "@mui/system"
import InfoBox from "./InfoBox"
import { LoadingSkeleton } from "./LoadingSkeleton"
import { useSelector } from "react-redux"
import CasesList from "./CasesList"
import Map from "./Map"

export function GridContainer() {
  const country = useSelector(state => state.country.value)
  const countries = useSelector(state => state.countries.value)
  const isLoading = useSelector(state => state.loading.value)
  const mapCenter = useSelector(state => state.mapCenter.value)
  const mapZoom = useSelector(state => state.mapZoom.value)
  
  React.useEffect(() => {
    // render()
  }, [country])
  if (!isLoading) {
    let countryData = countries.find(item => item.country === country)
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(5, 1fr)",
          gridGap: "25px",
          ml: 8,
        }}
      >
        <InfoBox
          type="Total Cases"
          sx={{
            gridArea: "1/1/2/2",
          }}
          title="Coronvirus Cases"
          cases={countryData.active}
          total={countryData.cases}
        />
        <InfoBox
          type="Recovered"
          sx={{
            gridArea: "1/2/2/3",
          }}
          title="Recovered"
          cases={countryData.recovered}
          total={countryData.cases}
        />
        <InfoBox
          type="Deaths"
          sx={{
            gridArea: "1/3/2/4",
          }}
          title="Deaths"
          cases={countryData.deaths}
          total={countryData.cases}
        />
        <Box
          sx={{
            gridArea: "1/4/6/6",
          }}
        >
          < CasesList />
        </Box>
        <Box
          sx={{
            gridArea: "2/1/6/4",
          }}
        >
          <Map countries={countries} center={mapCenter} zoom={mapZoom} />
        </Box>
        {/* <Map /> */}
      </Box>
    )
  } else {
    return <LoadingSkeleton />
  }
}
