import { styled } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Badge, { BadgeProps } from '@mui/material/Badge';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#ffcf33",
        },
        secondary: {
            main: "#f9fbe7",
        }
    }
});

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 2,
        top: 7,
        padding: '0 4px',
        backgroundColor: 'red',
        color: 'white',
        fontSize: '0.8rem',
    },
}));
