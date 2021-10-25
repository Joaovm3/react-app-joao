import { TextField } from "@material-ui/core";

export default function Input({ type = 'text', label = 'Default', ...rest }) {
  return (
    <TextField
      {...rest}
      type={type}
      label={label} 
      variant="standard"
    />
  );
}
