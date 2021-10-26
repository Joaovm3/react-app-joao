import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import Button from '../Button';

export default function Modal({ onClose = () => {}, onSubmit = () => {}, title, content, buttonName = 'Enviar', disabled = false, children }) {

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
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}> Fechar </Button>
          <Button onClick={onSubmit} disabled={disabled}> {buttonName} </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
