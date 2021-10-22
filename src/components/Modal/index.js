import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

//{  contentButton = 'Enviar', closeButton = 'Fechar', labelInput}
export default function Modal({ onClose = () => {}, onSubmit = () => {}, title, content, inputLabel, buttonName = 'Enviar' }) {

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
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={inputLabel}
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}> Fechar </Button>
            <Button onClick={onSubmit}> {buttonName} </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}
