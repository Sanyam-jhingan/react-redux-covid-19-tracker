import React from "react"
import { Skeleton } from "@mui/material"
import { Box } from "@mui/system"

export function LoadingSkeleton() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        gridGap: "25px",
      }}
    >
      <Skeleton
        sx={{
          gridArea: "1/1/2/2",
        }}
        animation="wave"
        variant="rectangular"
        width="100%"
        height="120px"
      />
      <Skeleton
        sx={{
          gridArea: "1/2/2/3",
        }}
        animation="wave"
        variant="rectangular"
        width="100%"
        height="120px"
      />
      <Skeleton
        sx={{
          gridArea: "1/3/2/4",
        }}
        animation="wave"
        variant="rectangular"
        width="100%"
        height="120px"
      />
      <Skeleton
        sx={{
          gridArea: "1/4/6/6",
        }}
        animation="wave"
        variant="rectangular"
        width="100%"
        height="100%"
      />
      <Skeleton
        sx={{
          gridArea: "2/1/6/4",
        }}
        animation="wave"
        variant="rectangular"
        width="100%"
        height="100%"
      />
    </Box>
  )
}
