import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import { CircularProgressStyle } from './style'

export default function Loading() {
  const { showLoading } = useSelector((state) => state.loading);

  if (showLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgressStyle />
      </Box>
    );
  } else {
    return null;
  }
}
