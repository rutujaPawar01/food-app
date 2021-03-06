import { Avatar, Grid, Paper, styled, TextField, Typography, InputBase, Box, IconButton, Link } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { ICartData } from '../cart/cart-data.type';
import { useDispatch } from 'react-redux';

function CartItem({ foodItem }: { foodItem: ICartData }) {
  const dispatch = useDispatch();

  /** Add product in product list */
  const handleCartAdd = () => {
    dispatch({
      type: "ADD_PRODUCT",
      data: foodItem
    })
  }

  /** Remove (reduce count) from product list */
  const handleCartRemove = () => {
    dispatch({
      type: "REMOVE_PRODUCT",
      slug: foodItem.slug
    })
  }

  /** Remove entire product from product list */
  const handleCartRemoveCategory = () => {
    dispatch({
      type: "REMOVE_PRODUCT_CATEGORY",
      slug: foodItem.slug
    })
  }

  return (
    <Box sx={{
      borderBottom: '1px solid black',
      paddingBottom: 2
    }}>
      <Grid container sx={{ mt: 3 }} spacing={1}>
        <Grid item xs={3}>
          <Avatar sx={{ width: '100%', height: 70 }} alt="card-icon" src={foodItem.image} variant="square" />
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid container>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                {foodItem.title}
              </Grid>
            </Grid>
            <Grid container spacing="2" sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <IconButton aria-label="remove" onClick={handleCartRemove}>
                  <RemoveOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: 'center' }}>
                {foodItem.count}
              </Grid>
              <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <IconButton aria-label="add" onClick={handleCartAdd}>
                  <AddOutlinedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography sx={{mt:2}} variant='body1'>{`${foodItem.currency}${parseFloat(foodItem.price) * foodItem.count}`}</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 1 }}>
        <Link sx={{ color: 'red' }} onClick={handleCartRemoveCategory}>Remove</Link>
      </Grid>
    </Box >
  );
}

export default CartItem;
