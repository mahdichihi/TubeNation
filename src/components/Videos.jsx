import { VideoCard, ChannelCard } from "./";
import { Stack, Box } from "@mui/material";

const Videos = ({ videos, direction }) => {
  // Filter the videos based on the presence of any errors or missing data
  const validVideos = videos?.filter((item) => {
    return (
      (item?.id?.videoId || item?.id?.channelId) &&
      item?.snippet?.title &&
      item?.snippet?.thumbnails?.medium?.url &&
      item?.snippet?.channelTitle
    );
  });

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      sx={{ marginBottom: "50px" }}
    >
      {!videos?.length && "Loading..."}
      {validVideos?.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: "320px",
            height: "290px",
            boxSizing: "border-box",
          }}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
      {validVideos && validVideos.length === 0 && (
        <Box>No valid videos found.</Box>
      )}
    </Stack>
  );
};

export default Videos;
