import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        headerContainer: {
            paddingTop: '5rem',
        },
        headerGrid: {
            padding: '5rem 0',
        },
        title: {
            fontSize: '25px',
            color: theme.palette.primary.main,
            padding: '2.5rem 1rem',
        },
        titleLocation: {
            fontSize: '25px',
            color: theme.palette.primary.main,
        },
        description: {
            fontSize: '18px',
            color: theme.palette.secondary.main,
            padding: '1rem 1rem',
        },
        descriptionSpec: {
            fontSize: '18px',
            color: theme.palette.secondary.main,
            padding: '1rem 1rem',
            paddingTop: '2.5rem',
            fontStyle: 'italic',
        },
        descriptionLocation: {
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
            padding: '1rem 0',
        },
        divider: {
            maxWidth: '100%',
            height: '2px',
            borderTop: '1px solid #707070',
            paddingBottom: '5rem',
        },
        googleMap: {
            border: '0',
            width: '100%',
            height: '720px',
            paddingBottom: '5rem',
        },
        productGrid: {
            paddingBottom: '5rem',
        },
    };
};

export default styles;
