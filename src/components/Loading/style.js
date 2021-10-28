import { CircularProgress, Box } from "@mui/material";
import styled from "styled-components";

export const CircularProgressStyle = styled(CircularProgress)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  z-index: 99999;
`;

export const BoxStyle = styled(Box)`
  /*   
  body {
      cursor: not-allowed !important;
      filter: blur(8px) !important;
    } 
  */
  display: flex;
  justify-content: center;
  align-items: center;
`;
