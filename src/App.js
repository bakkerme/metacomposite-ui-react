import React, {useEffect, useState} from "react";

import { useRoute, useLocation } from "wouter";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import Post from './postCard'
import Content from './content'
import Sidebar from "./sidebar";

import "./App.css";
import { getPostByIDFromPostList, getAllPosts, getRedditGalleryImages } from "./api";

function App() {
  const [posts, setPosts] = useState([]);
  const [visiblePost, setVisiblePost] = useState(null);

  const [location, setLocation] = useLocation();
  const [feedRouteMatch, feedRouteParams] = useRoute("/feed/:id");

  async function handleRouteChange(postsToSearch = posts) {
    if (feedRouteMatch && postsToSearch.length > 0) {
      const selectedPost = getPostByIDFromPostList(
        postsToSearch,
        feedRouteParams.id
      );

      setVisiblePost(selectedPost);

      if(selectedPost.isRedditGallery) {
        const images = await getRedditGalleryImages(selectedPost.link);
        const post = { ...selectedPost, imageURLs: images };
        console.log(post);
        setVisiblePost(post);
      }
    }
  }

  useEffect(() => {
    (async function fetchData() {
      const remotePosts = await getAllPosts();
      setPosts(remotePosts);

      handleRouteChange(remotePosts);
    })().then().catch(e => {throw e});
  }, []);

  useEffect(() => {
    handleRouteChange();
  }, [location])

  const handlePostClick = (post) => {
    setLocation(`/feed/${post.ID}`);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ display: "flex", flexDirection: "row", flex: 1}}>
        <Box sx={{
          maxHeight: "100vh",
          overflowY: "scroll",
          padding: "27px",
          display: "flex",
          flex: "2",
          maxWidth: "560px",
          paddingLeft: "39px",
          boxSizing: "border-box",
        }}>
          <Stack spacing={2}>
            {posts.map((post, i ) => (
              <Post
                key={i}
                post={post}
                onClick={handlePostClick}
              />
            ))}
          </Stack>
        </Box>
        <Box sx={{
          display: "flex",
          flex: 3,
          padding: "25px",
        }}>
          {visiblePost && <Content post={visiblePost} />}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
