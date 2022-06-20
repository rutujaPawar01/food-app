import { Avatar, Grid, Paper, Typography } from '@mui/material';
import { Centered, CustomizedBox } from './info-card.style';
import { Iinfocard } from './info-card.type';

function InfoCard({ imageUrl, titleText, subtitleText, bgColor = "#fff" }: Iinfocard) {
    return (
        <CustomizedBox>
            <Paper sx={{ backgroundColor: bgColor, minHeight: 200 }}>
                <Grid container direction="row" >
                    <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
                        <Centered>
                            <Avatar sx={{ width: 70, height: 'auto' }} alt="card-icon" src={imageUrl} variant="rounded" />
                        </Centered>
                    </Grid>
                    <Grid item xs={12}>
                        <Centered>
                            <Typography variant="subtitle1"> {titleText}</Typography>
                        </Centered>
                    </Grid>
                    <Grid item xs={12}>
                        <Centered>
                            <Typography variant="subtitle2"> {subtitleText}</Typography>
                        </Centered>
                    </Grid>
                </Grid>
            </Paper>
        </CustomizedBox>
    );
}

export default InfoCard;
