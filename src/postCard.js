import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export const Post = React.memo(function BlogCard() {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        padding: "4px 4px",
        boxShadow: "1px 5px 20px 0px rgb(34 35 58 / 20%)",
        maxWidth: 500,
        overflow: "initial",
        background: "#ffffff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <CardMedia
        image={"https://placekitten.com/640/360"}
        sx={{
          width: "100%",
          marginLeft: "-24px",
          marginTop: 0,
          maxWidth: 150,
          maxHeight: 150,
          paddingBottom: "24%",
          borderRadius: '8px',
          backgroundColor: "#fff",
        }}
      />
      <CardContent>
        <span
          style={{
            display: "inline-block",
            fontSize: 12,
            marginBottom: "0.875em",
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          28 Mar 2019
        </span>
        <h4
          style={{
            fontSize: 20,
            fontWeight: "bold",
            margin: 0,
            marginBottom: 7,
            letterSpacing: 0.1876,
          }}
        >
          What is Git?
        </h4>
        <p
          style={{
            fontSize: 13,
            letterSpacing: "0.00938em",
            marginBottom: 0,
            marginTop: 0,
            color: "rgba(0, 0, 0, 0.7)",
          }}
        >
          Git is a distributed version control system. Every dev has a working
          copy of the code and...
        </p>
      </CardContent>
    </Card>
  );
});

export default Post;
