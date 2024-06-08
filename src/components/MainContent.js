import React from "react";
import { Stack, Grid } from "@mui/material";

function MainContent() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: "lightgray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>30% Width Content</div>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            bgcolor: "lightblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>70% Width Content</div>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default MainContent;
