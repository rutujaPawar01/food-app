import { Grid, Avatar, Popper, Paper } from '@mui/material';
import RoundButton from '../../common/component/round-button/round-button';
import NavTabs from '../nav-tab/nav-tab.component';
import { ThemeProvider } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useState } from 'react';
import Cart from '../cart/cart.component';
import { useSelector } from "react-redux";
import { StyledBadge, theme } from './header.style';

function Header() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const count = useSelector<number>((state: any) => state.products.length);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    return (
        <Grid container sx={{ pt: 5 }}>
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
                    <Grid item xs={8} sx={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center', mt:1 }}>
                        <StyledBadge badgeContent={count as number} color="secondary" onClick={handleClick}>
                            <Badge badgeContent={count as number} color="secondary">
                                <ShoppingCartOutlined color="action" />
                            </Badge>
                        </StyledBadge>
                        <Popper id={id} open={open} anchorEl={anchorEl}>
                            <Paper elevation={3} sx={{ width: 400 }}>
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