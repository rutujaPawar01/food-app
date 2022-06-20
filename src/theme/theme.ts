import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#ffff",
        },
        secondary: {
            main: "#faf7f2",
        },
        info: {
            main: "#ffcf33",
        },
        error: {
            main: "#ff1744",
        },
        warning: {
            main: "#616161",
        },
        text: {
            primary: "#616161",
            secondary: "#bdbdbd",
        },
    },
    typography: {
        htmlFontSize: 15,
        subtitle1: {
            fontSize: 15,
            fontWeight: 'bold'
        },
        subtitle2: {
            fontSize: 14,
        },
        h3: {
            fontSize: 40,
        },
        body1: {
            fontSize: 16,
            color: "#616161"
        },
        h6: {
            fontSize: 23,
            color: "#ff1744",
            fontWeight: 'bold'
        },
    },
});