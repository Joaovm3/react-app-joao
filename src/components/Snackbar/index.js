import { Snackbar, Alert } from "@mui/material"

export default function index({ children, severity, onClose }) {
    const handleClose = (_, reason) => {
        if (reason === 'clickaway') return;
        onClose();
    }

    return (
    <Snackbar open={onClose} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {children}
        </Alert>
      </Snackbar>
    )
}
