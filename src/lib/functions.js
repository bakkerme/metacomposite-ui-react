export const isYoutubeURL = (url) => {
  return /youtube/.test(url) || /youtu\.be/.test(url);
};

export const getYoutubeVideoIDFromURL = (url) => {
  return url.split("/").pop();
};

export const getYoutubeEmbedURL = (url) => {
  return "https://www.youtube.com/embed/" + getYoutubeVideoIDFromURL(url);
};

export const isProxiedRedditGalleryURL = (url) => {
    return /redditgallery/.test(url);
}

export const timestampToString = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const month = new Intl.DateTimeFormat("en-AU", { month: "short" }).format(
    date
  );

  return `${date.getDay() + 1} ${month} ${date.getFullYear()}`;
};
