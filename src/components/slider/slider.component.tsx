import { Grid, Skeleton } from '@mui/material';
import ProductCard from '../../common/component/product-card/product-card.component';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IfoodItems } from '../../pages/menu/food-items.type';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};

function Slider({ category }: { category: string }) {
    const [foodItems, setFoodItems] = useState<IfoodItems[]>();

    useEffect(() => {
        axios.get('http://54.169.31.224:3000/category/' + category)
            .then(function (response) {
                setFoodItems([...response.data.data]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [category]);
    return foodItems && foodItems.length > 0 ?
        <Carousel
            infinite
            autoPlay
            partialVisbile
            itemClass="image-item"
            responsive={responsive}>
            {foodItems.map((food: IfoodItems) => <React.Fragment key={food.id}>
                <Grid item xs={3} sx={{ padding: '20px 0px 20px 20px' }}>
                    <ProductCard food={food} imageUrl={food.image} titleText={food.title} subtitleText={`${food.currency}${food.price}`} />
                </Grid>
            </React.Fragment>)}
        </Carousel> :
        <Grid container spacing={3}>
            <Grid item xs={3} sx={{ padding: '20px 0px 20px 20px' }}>
                <Skeleton variant="rectangular" width={300} height={400} />
            </Grid>
            <Grid item xs={3} sx={{ padding: '20px 0px 20px 20px' }}>
                <Skeleton variant="rectangular" width={300} height={400} />
            </Grid>
            <Grid item xs={3} sx={{ padding: '20px 0px 20px 20px' }}>
                <Skeleton variant="rectangular" width={300} height={400} />
            </Grid>
            <Grid item xs={3} sx={{ padding: '20px 0px 20px 20px' }}>
                <Skeleton variant="rectangular" width={300} height={400} />
            </Grid>
        </Grid>
}

export default Slider;