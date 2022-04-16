import { Card, CardContent, Typography } from "@mui/material"
import React from "react"
import AnimatedNumber from "react-animated-numbers"

export default function InfoBox({ title, cases, total, type }) {
  console.log('infobox',cases)
  return (
    <Card sx={{ width: "285px", height:"120px", mb: 3, ml: 3 }}>
      <CardContent>
        <Typography color="textSecondary">{title}</Typography>
        <Typography
          sx={() => {
            switch (type) {
              case "Total Cases":
                return { color: "blue" }
              case "Recovered":
                return { color: "green" }
              case "Deaths":
                return { color: "crimson" }
              default:
                return { color: "textSecondary" }
            }
          }}
          variant="h5"
          fontWeight="600"
        >
          <AnimatedNumber
            includeComma
            animateToNumber={cases}
            style={{
              transition: "0.8s ease-out",
              transitionProperty: "background-color, color, opacity",
            }}
            frameStyle={perc => (perc === 100 ? {} : { backgroundColor: "red" })}
            formatValue={n => n.toFixed(0)}
          />
        </Typography>
        <Typography sx={{mt:0.5}}  variant="body2" color="textSecondary">
          {new Date().toDateString()}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {total === 0 ? "0" : (cases / total * 100).toFixed(2)}% of {total}
        </Typography>
      </CardContent>
    </Card>
  )
}
