import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        headerContainer: {
            paddingTop: '2rem',
        },
        headerGrid: {
            padding: '5rem 0',
        },
        headerContent: {
            textAlign: 'center',
        },
        title: {
            fontSize: '25px',
            color: theme.palette.primary.main,
        },
        description: {
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
            padding: '1rem 5rem',
        },
        accordionTitle: {
            fontSize: '25px',
            color: theme.palette.primary.main,
        },
        accordionDescription: {
            fontSize: '18px',
            color: theme.palette.secondary.main,
            textAlign: 'justify',
            paddingTop: '2rem',
            paddingBottom: '2rem',
        },
        accordionBox: {
            padding: '2.5rem 10rem',
        },
    };
};

export default styles;
