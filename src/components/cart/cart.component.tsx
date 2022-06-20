import { Avatar, Grid, Paper, styled, TextField, Typography, InputBase, Button, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import CartItem from '../cart-item/cart.component';
import { useSelector, useDispatch } from "react-redux";
import { IfoodItems } from '../../pages/menu/food-items.type';
import { ICartData } from './cart-data.type';

function Cart() {
  const data = useSelector((state: any) => state.products);
  const [cartData, setCartData] = useState<ICartData[]>();

  useEffect(() => {
    const collabCartData = [];
    const cartids = {};

    data?.length > 0 && data.forEach((cartItem: ICartData) => {
      if (cartItem) {
        if (cartids[cartItem?.slug]) {
          const idx = collabCartData?.findIndex(item => item?.slug === cartItem?.slug);
          collabCartData[idx].count++;
        } else {
          cartids[cartItem?.slug] = true;
          cartItem.count = 1;
          collabCartData.push(cartItem);
        }
      }
    });
    setCartData(collabCartData);
  }, [data]);

  return (
    <Grid container>
      <Box sx={{ m: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h3'>Cart</Typography>
          </Grid>
        </Grid>
        {cartData?.length > 0 ? cartData.map((foodItem: ICartData) => {
          return <Grid container>
            <Grid item xs={12}>
              <CartItem foodItem={foodItem} />
            </Grid>
          </Grid>
        }) : <Typography sx={{mt:5}}>Cart is Empty. Let's add something...</Typography>}
      </Box>
    </Grid>
  );
}

export default Cart;
