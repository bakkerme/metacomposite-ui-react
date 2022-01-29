import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { timestampToString } from "./lib/functions";

export const Post = ({ post, onClick, ...other }) => {
  const { title, timestamp, imageURLs, description } = post;

  const dateString = timestampToString(timestamp);
  const truncatedDescription =
    description.length > 0 ? description.split(".")[0] + "." : null;

  const handleClick = () => {
    onClick(post);
  };

  return (
      <Card
        sx={{
          borderRadius: "16px",
          // maxWidth: 500,
          overflow: "initial",
          background: "#ffffff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleClick}
        {...other}
      >
        {imageURLs.length > 0 && (
          <CardMedia
            image={imageURLs[0]}
            sx={{
              width: "100%",
              marginLeft: "-24px",
              marginTop: 0,
              maxWidth: 100,
              maxHeight: 100,
              paddingBottom: "24%",
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          />
        )}
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
            {dateString}
          </span>
          <h4
            style={{
              fontSize: 20,
              fontWeight: "bold",
              margin: 0,
              letterSpacing: 0.1876,
            }}
          >
            {title}
          </h4>
          {truncatedDescription && (
            <p
              style={{
                fontSize: 13,
                letterSpacing: "0.00938em",
                marginBottom: 0,
                marginTop: 7,
                color: "rgba(0, 0, 0, 0.7)",
              }}
            >
              {truncatedDescription}
            </p>
          )}
        </CardContent>
      </Card>
  );
};

export default Post;
