import { Message } from '@mui/icons-material';
import { Avatar, Grid, Alert, styled, TextField, Typography, Snackbar, Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { text } from 'stream/consumers';
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
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  const checkNameValid = (text:string) => {
    const pattern = /^[a-zA-Z]+$/;
    if(text.trim().length && pattern.test(text.trim())){
      setIsNameValid(true);
    }else{
      setIsNameValid(false);
    }
  }

  const checkEmailValid = (text:string) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(text.trim().length && pattern.test(text.trim())){
      setIsEmailValid(true);
    }else{
      setIsEmailValid(false);
    }
  }

  const checkPasswordValid = (text:string) => {
    if(text.trim().length >= 6){
      setIsPasswordValid(true);
    }else{
      setIsPasswordValid(false);
    }
  }

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
      checkNameValid(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
      checkEmailValid(e.target.value);
    } else {
      setPassword(e.target.value);
      checkPasswordValid(e.target.value);
    }

    
  }

  const submit = () => {
    axios.post('http://54.169.31.224:3000/signup', {
      name,
      email,
      password
    })
      .then(function (response) {
        setOpen(true);
        setSuccess(true);
        setMesage(response.data.message);
      })
      .catch(function (error) {
        setOpen(true);
        setSuccess(false);
        if(error?.response?.data?.message[0]?.constraints){
          const errorKey = Object.keys(error.response.data.message[0].constraints);
        setMesage(error.response.data.message[0].constraints[errorKey[0]]);
        } 
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
          {!isNameValid && <Typography color="error.main">
            Please enter valid name.
          </Typography>}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <CssTextField fullWidth onChange={handleChange} label="Email Address" name="email" />
          {!isEmailValid && <Typography color="error.main">
            Please enter valid email id.
          </Typography>}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <CssTextField fullWidth onChange={handleChange} label="Password" name="password" type="password"/>
          {!isPasswordValid && <Typography color="error.main">
          Password must be longer than or equal to 6 characters.
          </Typography>}
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
