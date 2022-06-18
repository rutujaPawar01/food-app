import { Avatar, Grid, Paper, styled, Typography } from '@mui/material';

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
    bgColor?: string;
}

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
