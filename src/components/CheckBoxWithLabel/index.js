import { FormGroup, FormControlLabel } from "@mui/material";
import { CheckBoxStyle } from "./style";

export default function CheckBoxWithLabel({ label = 'Lembre-me', ...props }) {
  return (
    <FormGroup>
      <FormControlLabel control={<CheckBoxStyle {...props} />} label={label} />
    </FormGroup>
  );
}
