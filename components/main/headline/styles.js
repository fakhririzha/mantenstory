import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        headlineBox: {
            marginTop: '10rem',
        },
        title: {
            color: theme.palette.primary.main,
            textAlign: 'center',
            fontSize: '25px',
        },
        descriptionGrid: {
            marginTop: '2rem',
        },
        description: {
            color: theme.palette.secondary.main,
            textAlign: 'center',
            fontSize: '18px',
            fontStyle: 'italic',
        },
        descriptionFooter: {
            marginTop: '1rem',
            color: theme.palette.secondary.main,
            textAlign: 'center',
            fontSize: '19px',
            fontStyle: 'italic',
        },
    };
};

export default styles;
