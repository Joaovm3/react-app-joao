import React from "react";
import { FormGroup, FormControlLabel } from "@mui/material";
import { CheckBoxStyle } from "./style";

export default function CheckBoxWithLabel({ label = 'Lembre-me' }) {
  return (
    <FormGroup>
      <FormControlLabel control={<CheckBoxStyle />} label={label} />
    </FormGroup>
  );
}
