import React from "react";
import { Stack, Grid, TextField } from "@mui/material";
import TextFieldBase from "./TextFieldBase";

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
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Stack sx={{ width: "100%", height: "100%" }}>
            <Grid container direction="column" sx={{ height: "100%" }}>
              <Grid item sx={{ bgcolor: "lightblue", height: "100%" }}>
                <div>100% Height Content 1</div>
              </Grid>
              <Grid
                item
                sx={{
                  bgcolor: "lightblue",
                  height: "0%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                {/* <TextField placeholder="Message" /> */}
                <TextFieldBase />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default MainContent;
