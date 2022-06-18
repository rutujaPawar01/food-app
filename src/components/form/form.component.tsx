import { Avatar, Grid, Paper, styled, TextField, Typography, InputBase, Button } from '@mui/material';
import { alpha } from '@mui/material/styles';

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
  return (
    <Grid container>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2, color: 'error.main' }}>
          <Typography variant='h6'>Get Started for Free</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <CssTextField fullWidth onChange={() => { }} label="Name"  />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <CssTextField fullWidth onChange={() => { }} label="Email Address"  />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <CssTextField fullWidth onChange={() => { }} label="Password"  />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
          <Button variant='contained' fullWidth color="info">
            GET STARTED
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Form;
