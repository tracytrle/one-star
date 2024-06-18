import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import data from "../data/model.json";

// import Paper from "@mui/material/Paper";
const Item = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
  // "&.Mui-selected, &.Mui-focused": {
  //   backgroundColor: theme.palette.third.main,
  //   color: theme.palette.primary.contrastText,
  // },
}));

function Model() {
  return (
    <Stack
      data-testid="model-component"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6">Text Classification</Typography>

      <Grid container spacing={2}>
        {data.model.map((item) => (
          <Grid item key={item} xs={6} md={4}>
            <Item>{item}</Item>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default Model;
