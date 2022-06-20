import { Grid, Typography, Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import CartItem from '../cart-item/cart.component';
import { useSelector } from "react-redux";
import { ICartData } from './cart-data.type';

function Cart() {
  const data = useSelector((state: any) => state.products);
  const [cartData, setCartData] = useState<ICartData[]>();
  const [totalCost, setTotalcost] = useState<number>();

  useEffect(() => {
    const collabCartData = [];
    const cartids = {};

    /** Format all the added items and add count for each one */
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

    const total = getTotalCost(collabCartData);
    setTotalcost(total);
  }, [data]);

  const getTotalCost = (data: ICartData[]) => {
    return data?.reduce((accumulator: number, item: ICartData) => {
      return item.count * parseFloat(item.price) + accumulator;
    }, 0);
  }

  return (
    <Grid container>
      <Box sx={{ m: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h3'>Cart</Typography>
          </Grid>
        </Grid>
        {cartData?.length > 0 ? cartData.map((foodItem: ICartData) => {
          return <Grid container key={foodItem.id}>
            <Grid item xs={12}>
              <CartItem foodItem={foodItem} />
            </Grid>
          </Grid>
        })
          : <Typography sx={{ mt: 5 }}> Cart is Empty. Let's add something...</Typography>
        }
        {cartData?.length > 0 && <Grid container sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Button variant="contained" color="info" sx={{ borderRadius: 10, width: '100%', color: '#fff' }}>
              <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid item xs={6}>Check out</Grid>
                <Grid item xs={4}>{`$${totalCost}`}</Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>}
      </Box >
    </Grid >
  );
}

export default Cart;
