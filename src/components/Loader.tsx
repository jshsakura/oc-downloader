import React from "react";
import ReactDOM from "react-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/joy/Box";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // 전체 높이
        backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 배경
      }}
    >
      <CircularProgress />
    </Box>
  );
}

ReactDOM.render(<Loader />, document.getElementById("loader"));
