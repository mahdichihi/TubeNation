import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box
        sx={{
          position: "fixed",
          top: "78px",
          right: 0,
          left: 0,
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(42deg, rgba(135,240,255,1) 0%, rgba(103,122,255,0.9809173669467787) 30%, rgba(147,82,196,1) 70%)",
            zIndex: 10,
            height: "110px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>

      <Box
        sx={{
          display: "flex",
          mt: "350px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
