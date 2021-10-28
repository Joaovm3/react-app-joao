import { useSelector } from "react-redux";

import { CircularProgressStyle, BoxStyle } from "./style";

export default function Loading() {
  const { showLoading } = useSelector((state) => state.loading);

  if (showLoading) {
    return (
      <BoxStyle>
        <CircularProgressStyle />
      </BoxStyle>
    );
  } else {
    return null;
  }
}
