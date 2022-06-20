import { ShoppingCartOutlined } from '@mui/icons-material';
import { Avatar, Grid, Paper, Typography, Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Centered, CustomizedBox } from './product-card.style';
import { Iproductcard } from './product-card.type';

function ProductCard({ imageUrl, titleText, subtitleText, bgColor = "#fff", food }: Iproductcard) {
    const dispatch = useDispatch();

    /** Add the product to cart */
    const handleCartAdd = () => {
        dispatch({
            type: "ADD_PRODUCT",
            data: food
        })
    }

    return (
        <CustomizedBox>
            <Paper elevation={0} sx={{ minHeight: 200, boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%)' }}>
                <Grid container direction="row" >
                    <Grid item xs={12}>
                        <Centered>
                            <Avatar sx={{ width: '100%', height: 'auto' }} alt="card-icon" src={imageUrl} variant="square" />
                        </Centered>
                    </Grid>
                    <Box sx={{ p: 3 }}>
                        <Grid item xs={12} sx={{ textAlign: 'start', ml: 1 }}>
                            <Typography variant="subtitle1"> {titleText}</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'start', ml: 1 }}>
                            <Typography variant="subtitle2"> {subtitleText}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="warning" endIcon={<ShoppingCartOutlined />} onClick={handleCartAdd}>
                                <Typography variant="subtitle2"> Add To Cart</Typography>
                            </Button>
                        </Grid>
                    </Box>
                </Grid>
            </Paper>
        </CustomizedBox>
    );
}

export default ProductCard;
