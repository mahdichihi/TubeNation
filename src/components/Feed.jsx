import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useEffect, useState } from "react";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        height: "calc(100vh - 78px)",
      }}
    >
      <Box
        sx={{
          height: { xs: "auto", md: "calc(100vh - 78px)" },
          borderRight: { md: "1px solid #3d3d3d" },
          px: { xs: 0, md: 2 },
          position: { xs: "sticky", md: "static" },
          top: { xs: "78px" },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: "1.5",
            color: "#fff",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          Copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box
        px={2}
        sx={{ overflowY: "auto", height: "calc(100vh - 78px)", flex: 2 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
            backgroundColor: "black",
            position: "sticky",
            top: 0,
          }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
