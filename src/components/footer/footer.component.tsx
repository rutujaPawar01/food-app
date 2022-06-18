import { Grid } from '@mui/material';

function Footer() {
    return (
        <Grid container>
            <Grid item xs={12} sx={{
                bgcolor: 'secondary.main', 
                color: 'text.primary', 
                height: 100, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
            }} >
                Copyright @ 2022 abcd. All rights reserved.
            </Grid>

        </Grid>
    );
}

export default Footer;