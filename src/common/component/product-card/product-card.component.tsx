import { ShoppingCartOutlined } from '@mui/icons-material';
import { Avatar, Grid, Paper, styled, Typography, Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { IfoodItems } from '../../../pages/menu/food-items.type';

const CustomizedBox = styled(Paper)`
    width: 100%;
    display: 'flex';
`;

const Centered = styled('div')`
    display: flex;
    justify-content: center;
`;

interface Iinfocard {
    imageUrl: string;
    titleText: string;
    subtitleText: string;
    food: IfoodItems;
    bgColor?: string;
}

function ProductCard({ imageUrl, titleText, subtitleText, bgColor = "#fff", food }: Iinfocard) {
    const dispatch = useDispatch();

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
