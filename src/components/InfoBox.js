import { Card, CardContent, Typography } from "@mui/material"
import React from "react"

export default function InfoBox({ title, cases, total, type }) {
  return (
    <Card sx={{ width: "285px", mb: 3, ml: 3 }}>
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
          {cases}
        </Typography>
        <Typography color="textSecondary">{total} Total</Typography>
      </CardContent>
    </Card>
  )
}
