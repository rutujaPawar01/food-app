import { Grid, Avatar, Popper, Box, styled, Paper } from '@mui/material';
import RoundButton from '../../common/component/round-button/round-button';
import NavTabs from '../nav-tab/nav-tab.component';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useState } from 'react';
import Cart from '../cart/cart.component';
import { useSelector, useDispatch } from "react-redux";


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
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const count = useSelector<number>((state: any) => state.products.length);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <Grid container sx={{ mt: 5 }}>
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
                        <StyledBadge badgeContent={count as number} color="secondary" onClick={handleClick}>
                            <Badge badgeContent={count as number} color="secondary">
                                <ShoppingCartOutlined color="action" />
                            </Badge>
                        </StyledBadge>
                        <Popper id={id} open={open} anchorEl={anchorEl}>
                            <Paper elevation={3} sx={{ width: 500 }}>
                                <Cart />
                            </Paper>
                        </Popper>
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