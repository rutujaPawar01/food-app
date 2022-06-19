import { Grid, Avatar, Menu, Button, styled, Typography, Box, useTheme, Theme } from '@mui/material';
import InfoCard from '../../common/component/info-card/info-card.component';
import RoundButton from '../../common/component/round-button/round-button';
import NavTabs from '../../components/nav-tab/nav-tab.component';
import ProductTabs from '../../components/product-tab/product-tab.component';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface IcontactData {
    description: string,
    icon: string,
    id: number,
    slug: string,
    title: string
}

function HomePage() {
    const theme = useTheme<Theme>();
    const [contactData, setContactData] = useState<IcontactData[]>([]);

    useEffect(() => {
        axios.get('http://54.169.31.224:3000/contact')
            .then(function (response) {
                setContactData([...response.data.data]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    return (
        <Box sx={{
            backgroundImage: `url("assets/images/Group 9112.png")`,
            backgroundSize: 700,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'right',
            mt: 5
        }}>
            <Box sx={{ pt: 15 }}>
                <Grid container>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start' }}>
                        <Typography variant="h3">Different Spice For A Different Taste</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start', mt: 2 }}>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start', mt: 2 }}>
                        <RoundButton>GET STARTED</RoundButton>
                    </Grid>
                </Grid>

                <Grid container sx={{ mt: 10 }} spacing={2}>
                    {
                        contactData.map((contactItem, index) => {
                            return <Grid key={contactItem.id} item xs={4} sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start', mt: 2 }}>
                                <InfoCard 
                                    bgColor={index===1?theme.palette.info.main:''}
                                    imageUrl={contactItem.icon}
                                    titleText={contactItem.description}
                                    subtitleText={contactItem.title}
                                />
                            </Grid>
                        })
                    }

                </Grid>
            </Box>
        </Box >
    );
}

export default HomePage;
