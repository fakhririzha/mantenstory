import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: [
            'Playfair Display',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#1F1F1F',
        },
        secondary: {
            main: '#707070',
        },
        error: {
            main: red.A400,
        },
        white: {
            main: '#FFFFFF',
        },
        primaryCard: {
            main: '#EFEFEF',
        },
        grey: {
            main: '#A1A795',
        },
        bigComma: {
            main: '#6A6A6A',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 720,
            md: 1024,
            lg: 1200,
            xl: 1600,
            mobile: 0,
            tablet: 720,
            laptop: 1024,
            desktop: 1200,
            desktopXl: 1600,
        },
    },
});

export default theme;
