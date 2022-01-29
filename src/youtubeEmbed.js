const YouTubeEmbed = ({url, width, height}) => {
    return (
      <iframe
        title="youtube-embed"
        id="ytplayer"
        type="text/html"
        width={width}
        height={height}
        src={url}
        frameBorder="0"
      ></iframe>
    );
}

export default YouTubeEmbed;