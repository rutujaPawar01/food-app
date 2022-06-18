import { Grid, Avatar, Menu, Button, styled, Typography, Box } from '@mui/material';
import InfoCard from '../../common/component/info-card/info-card.component';
import RoundButton from '../../common/component/round-button/round-button';
import NavTabs from '../../components/nav-tab/nav-tab.component';
import ProductTabs from '../../components/product-tab/product-tab.component';

function HomePage() {
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
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start', mt: 2 }}>
                        <InfoCard
                            imageUrl="/assets/images/Calendar.png"
                            titleText="Trail End Road United states"
                            subtitleText="Working Hours"
                        />
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start', mt: 2 }}>
                        <InfoCard
                            imageUrl="/assets/images/Calendar.png"
                            titleText="Trail End Road United states"
                            subtitleText="Working Hours"
                            bgColor="#ffcf33" />
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start', mt: 2 }}>
                        <InfoCard
                            imageUrl="/assets/images/Calendar.png"
                            titleText="Trail End Road United states"
                            subtitleText="Working Hours"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
}

export default HomePage;
