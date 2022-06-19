import { Grid, Box } from '@mui/material';
import ProductCard from '../../common/component/product-card/product-card.component';
import { Paper, Button } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Example(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel
            partialVisbile
            itemClass="image-item"
            responsive={responsive}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}
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

var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    },
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    },
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
function Slider() {
    return (
        <Carousel
            partialVisbile
            itemClass="image-item"
            responsive={responsive}>

            <Grid item xs={3} sx={{ padding: '20px 0px 20px 20px' }}>
                <ProductCard imageUrl="assets/images/pizza 1.png" titleText="Japaniz Pizza" subtitleText='$8.22' />
            </Grid>
            <Grid item xs={3} sx={{ padding: '20px 0px 20px 20px' }}>
                <ProductCard imageUrl="assets/images/pizza 1.png" titleText="Japaniz Pizza" subtitleText='$8.22' />
            </Grid>
            <Grid item xs={3} sx={{ padding: '20px 0px 20px 20px' }}>
                <ProductCard imageUrl="assets/images/pizza 1.png" titleText="Japaniz Pizza" subtitleText='$8.22' />
            </Grid>
            <Grid item xs={3} sx={{ padding: '20px 0px 20px 20px' }}>
                <ProductCard imageUrl="assets/images/pizza 1.png" titleText="Japaniz Pizza" subtitleText='$8.22' />
            </Grid>
            <Grid item xs={3} sx={{ padding: '20px 0px 20px 20px' }}>
                <ProductCard imageUrl="assets/images/pizza 1.png" titleText="Japaniz Pizza" subtitleText='$8.22' />
            </Grid>
            <Grid item xs={3} sx={{ padding: '20px 0px 20px 20px' }}>
                <ProductCard imageUrl="assets/images/pizza 1.png" titleText="Japaniz Pizza" subtitleText='$8.22' />
            </Grid>
        </Carousel>
    );
}

export default Slider;