import { Alert, Snackbar } from '@mui/material';

function Toast({ open, onClose, message, isSuccess }: { open: boolean, onClose: () => void, message: string, isSuccess: boolean }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={onClose}
      key={'top+center'}
    >
      {isSuccess ?
        <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert> :
        <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>}
    </Snackbar>
  );
}

export default Toast;
