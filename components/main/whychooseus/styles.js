import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        whyChooseUs: {
            marginTop: '2.5rem',
            [theme.breakpoints.up('tablet')]: {
                marginTop: '-20rem',
            },
        },
        title: {
            fontSize: '25px',
            color: theme.palette.primary.main,
            textAlign: 'center',
        },
        description: {
            marginTop: '5rem',
            marginLeft: '10vw',
            marginRight: '10vw',
        },
        descRow: {
            padding: '1.5rem',
        },
        descNumber: {
            fontSize: '18px',
            [theme.breakpoints.up('tablet')]: {
                fontSize: '25px',
            },
            textAlign: 'center',
            color: theme.palette.secondary.main,
        },
        descContent: {
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
            [theme.breakpoints.up('tablet')]: {
                borderBottom: '2px solid #70707070',
                paddingBottom: '2rem',
            },
        },
        descContentLast: {
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
        },
        mobileGrid: {
            marginTop: '1.5rem',
        },
    };
};

export default styles;
