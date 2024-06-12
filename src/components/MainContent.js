import React from "react";
import { Stack, Grid } from "@mui/material";
import TextFieldBase from "./TextFieldBase";
import WelcomeMessage from "./WelcomeMessage";
import SearchModel from "./SearchModel";
import Model from "./Model";

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
            alignItems: "flex-start",
          }}
        >
          <Grid container direction="column" spacing={3} sx={{ width: "100%" }}>
            <Grid item sx={{ mt: 2 }}>
              <SearchModel />
            </Grid>
            <Grid item sx={{ mt: 1, ml: 2 }}>
              <Model />
            </Grid>
            <Grid item>
              <WelcomeMessage />
            </Grid>
          </Grid>
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
              <Grid
                item
                sx={{
                  bgcolor: "lightblue",
                  height: "100%",
                  overflow: "auto",
                }}
              >
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
