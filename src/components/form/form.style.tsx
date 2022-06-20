import { styled, TextField } from '@mui/material';

export const CssTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },
  '& label.Mui-focused': {
    color: theme.palette.info.main,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.info.main,
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.primary.main,
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.info.main,
    },
  },
}));
