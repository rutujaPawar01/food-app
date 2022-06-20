import { Grid, Typography, Box } from '@mui/material';
import ProductTabs from '../../components/product-tab/product-tab.component';
import Slider from '../../components/slider/slider.component';
import { useState } from 'react';
import { Icategories } from './categories.type';

function MenuPage() {
    const [currentCategory, setCurrentCategory] = useState<Icategories>();

    return (
        <Box sx={{ mt: 10 }} id="menu">
            <Grid container>
                <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'start' }}>
                    <Typography variant="h3"> Our Popular Menu</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start' }}>
                    <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <ProductTabs {...{ currentCategory, setCurrentCategory }} />
                </Grid>
            </Grid>
            <Slider category={currentCategory?.slug} />
        </Box>
    );
}

export default MenuPage;
