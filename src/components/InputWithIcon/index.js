import { Box, FormControl, InputLabel } from "@mui/material";
import { InputStyle } from "./style";

export default function InputWithIcon({
  children,
  type = "text",
  label = "Default",
  ...rest
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", margin: "15px 0px" }}>
      {children}

      <FormControl
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <InputLabel> {label} </InputLabel>
        <InputStyle
          {...rest}
          type={type}
          variant="standard"
        />
      </FormControl>
    </Box>
  );
}
