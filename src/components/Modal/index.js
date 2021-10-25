import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import Button from '../Button';
import Input from '../Input';

export default function Modal({ onClose = () => {}, onSubmit = () => {}, title, content, inputLabel, buttonName = 'Enviar', error = false, helperText, disabled = false }) {

  return (
    <div>
      <Dialog open>
        <DialogTitle style={{ fontWeight: "bold" }}>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {content}
          </DialogContentText>
          <Input 
            error={error}
            helperText={helperText}
            autoFocus
            fullWidth
            label={inputLabel}
            type="email"
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}> Fechar </Button>
          <Button onClick={onSubmit} disabled={disabled}> {buttonName} </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
