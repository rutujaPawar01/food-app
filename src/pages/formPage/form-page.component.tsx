import { Grid, Avatar, Menu, Button, styled, Typography, Box } from '@mui/material';
import Form from '../../components/form/form.component';
import NavTabs from '../../components/nav-tab/nav-tab.component';
import ProductTabs from '../../components/product-tab/product-tab.component';

function FormPage() {
    return (
        <Box sx={{ bgcolor: 'secondary.main', padding: 10, borderRadius: 5, mt: 3 }}>
            <Grid container>
                <Grid item xs={8} sx={{ display: 'flex',  flexDirection: 'column', justifyContent: 'center' }}>
                    <Grid container>
                        <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start' }}>
                            <Typography variant="h3">Receive payment quickly from anywhere</Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ mt: 2 }}>
                        <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start' }}>
                            <Typography variant="body1">
                                Why kept very ever home mrs.Considered Sympathhize ten uncomminly occasional assistance suffiecient not. Letter of on become he tended active enable to.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start' }}>
                            <Form />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FormPage;
