import React from "react"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import InfoBox from "./InfoBox"
import { LoadingSkeleton } from "./LoadingSkeleton"
import { useSelector } from "react-redux"

export function GridContainer() {
  const country = useSelector(state => state.country.value)
  const countries = useSelector(state => state.countries.value)
  const isLoading = useSelector(state => state.loading.value)

  // if (country !== "Worldwide") {
  //   countryData = countries.find(item => item.country === country)
  // } else {
  //   countryData = {
  //     active: 123,
  //     cases: 1234,
  //     deaths: 12,
  //     recovered: 12345,
  //   }
  // }

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
        <Typography
          sx={{
            gridArea: "1/4/6/6",
          }}
        >
          Worldwide Cases
        </Typography>
        <Typography
          sx={{
            gridArea: "2/1/6/4",
          }}
        >
          Map here
        </Typography>
        {/* <Map /> */}
      </Box>
    )
  } else {
    return (
      <LoadingSkeleton />
    )
  }
}
