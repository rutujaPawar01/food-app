import { Message } from '@mui/icons-material';
import { Avatar, Grid, Alert, styled, TextField, Typography, Snackbar, Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Toast from '../toast/toast.component';

const CssTextField = styled(TextField)(({ theme }) => ({
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
function Form() {
  const [name, setName] = useState<string>(null);
  const [email, setEmail] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMesage] = useState<string>('');
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const submit = () => {
    axios.post('http://54.169.31.224:3000/signup', {
      name,
      email,
      password
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onClose = () => {
    setOpen(false);
  }

  return (
    <Grid container>
      <Toast open={open} onClose={onClose} message={message} isSuccess={isSuccess} />
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2, color: 'error.main' }}>
          <Typography variant='h6'>Get Started for Free</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <CssTextField fullWidth onChange={handleChange} label="Name" name="name" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <CssTextField fullWidth onChange={handleChange} label="Email Address" name="email" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <CssTextField fullWidth onChange={handleChange} label="Password" name="password" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
          <Button variant='contained' onClick={submit} fullWidth color="info">
            GET STARTED
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Form;
