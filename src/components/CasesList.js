import React from "react"
//import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
//import ListItemButton from "@mui/material/ListItemButton"
//import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { FixedSizeList } from "react-window"
import { useSelector } from "react-redux"
import { Paper, Typography } from "@mui/material"
import LineGraph from "./LineGraph"

export default function CasesList() {
  const countries = useSelector(state => state.countries.value)

  function sortCountriesByCases(countries) {
    const arrayForSort = [...countries]
    arrayForSort.sort((a, b) => {
      return b.cases - a.cases
    })
    return arrayForSort
  }
  console.log(sortCountriesByCases(countries))
  return (
    <>
      <Paper sx={{width:"fit-content", borderRadius:'10px'}} elevation={3}>
        <Typography sx={{p:1, borderBottom:'1px solid black'}} variant="h5" >
          Cases by Country
        </Typography>
        <FixedSizeList
          height={515}
          itemCount={sortCountriesByCases(countries).length - 1}
          itemSize={50}
          width={600}
          >
          {({ index, style }) => (
              <ListItem style={style}>
              <ListItemText
                primary={sortCountriesByCases(countries)[index + 1].country}
                />
              <ListItemText
                sx={{ textAlign: "right", fontWeight: "700" }}
                primary={sortCountriesByCases(countries)[index + 1].cases}
                />
            </ListItem>
          )}
        </FixedSizeList>
        <LineGraph />
          </Paper>
    </>
  )
}
