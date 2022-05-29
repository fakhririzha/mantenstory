import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        headerContainer: {
            paddingTop: '0rem',
        },
        headerContent: {
            textAlign: 'center',
        },
        title: {
            fontSize: '25px',
            color: theme.palette.primary.main,
            padding: '2.5rem 0',
        },
        description: {
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
            [theme.breakpoints.up('tablet')]: {
                padding: '0rem 30rem 10rem 30rem',
            },
        },
        footer: {
            backgroundColor: theme.palette.primaryCard.main,
            marginTop: '-350px',
        },
    };
};

export default styles;
