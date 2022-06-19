import { Avatar, Grid, Paper, styled, TextField, Typography, InputBase, Button, Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
import CartItem from '../cart-item/cart.component';

function Cart() {
  return (
    <Grid container>
      <Box sx={{m:5}}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h3'>Cart</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <CartItem />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <CartItem />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <CartItem />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Cart;
