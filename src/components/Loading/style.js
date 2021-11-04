import { CircularProgress, Box } from "@mui/material";
import styled from "styled-components";

export const CircularProgressStyle = styled(CircularProgress)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999; 
  top: 10px;
`;

export const BoxStyle = styled(Box)`
  /*   
  body {
      cursor: not-allowed !important;
      filter: blur(8px) !important;
    } 
  */
  text-align: center;
`;
