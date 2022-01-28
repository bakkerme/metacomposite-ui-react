import React from "react";
import "./App.css";
import Sidebar from "./sidebar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Post from './postCard'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar />
      <Grid container spacing={2} p={4}>
        <Grid item xs={6}>
          <Stack spacing={2}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          Content
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
