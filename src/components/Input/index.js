import React from "react";
import { TextField } from "@material-ui/core";

export default function Input({ id = 'input', label = 'Default' }) {
  return (
    <TextField 
      id={id} 
      label={label} 
      variant="outlined"
    />
  );
}
