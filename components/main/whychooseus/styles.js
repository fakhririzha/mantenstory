import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        whyChooseUs: {
            marginTop: '-20rem',
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
            fontSize: '25px',
            textAlign: 'center',
            color: theme.palette.secondary.main,
        },
        descContent: {
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
            borderBottom: '2px solid #70707070',
            paddingBottom: '2rem',
        },
        descContentLast: {
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
        },
    };
};

export default styles;
