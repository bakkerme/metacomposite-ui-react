import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { isYoutubeURL, getYoutubeEmbedURL } from "./lib/functions";
import YouTubeEmbed from "./youtubeEmbed";

const Content = ({ post }) => {
  console.log(post);
  return (
    <Box sx={{ flex: 1 }}>
      <Stack spacing={2}>
        {getHeroContent(post)}
        <Box
          sx={{
            letterSpacing: "0.00938em",
            color: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <h1 style={{ marginTop: 0 }}>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <a href={post.link} target="_blank" rel="noreferrer">
            Read more
          </a>
        </Box>
      </Stack>
    </Box>
  );
};

const getHeroContent = (post) => {
  if (isYoutubeURL(post.link)) {
    return <YouTubeEmbed url={getYoutubeEmbedURL(post.link)} height={400} />;
  }

  if (post.imageURLs && post.imageURLs.length > 0) {
    const imageGalleryItems = post.imageURLs.map((imageURL) => {
      return {
        original: imageURL,
        originalHeight: 400,
      };
    });

    return (
      <Box
        sx={{
          backgroundColor: "black",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImageGallery items={imageGalleryItems} />;
      </Box>
    );
  }

  return <React.Fragment></React.Fragment>;
};

export default Content;
