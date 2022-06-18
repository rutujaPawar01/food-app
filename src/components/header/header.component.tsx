import { Grid, Avatar, Menu, Button, styled } from '@mui/material';
import RoundButton from '../../common/component/round-button/round-button';
import NavTabs from '../nav-tab/nav-tab.component';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffcf33",
        },
        secondary: {
            main: "#f9fbe7",
        }
    }
});

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 2,
        top: 7,
        padding: '0 4px',
        backgroundColor: 'red',
        color: 'white',
        fontSize: '0.8rem',
    },
}));

function Header() {
    return (
        <Grid container sx={{mt:5}}>
            <Grid item xs={4}>
                <div>
                    <Avatar sx={{
                        width: 140,
                        height: "auto"
                    }}
                        variant="rounded"
                        src="/assets/images/Logo with text.png" />
                </div>
            </Grid>
            <Grid item xs={4}>
                <div>
                    <ThemeProvider theme={theme}>
                        <NavTabs />
                    </ThemeProvider>
                </div>
            </Grid>
            <Grid item xs={4}>
                <Grid container>
                    <Grid item xs={8} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
                        <StyledBadge badgeContent={4} color="secondary">
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartOutlined color="action" />
                            </Badge>
                        </StyledBadge>
                    </Grid>
                    <Grid item xs={4}>
                        <RoundButton>Log In</RoundButton>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}

export default Header;