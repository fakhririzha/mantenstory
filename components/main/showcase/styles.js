import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        showcaseBox: {
            marginTop: '10rem',
        },
        showcaseOne: {
            position: 'relative',
            maxWidth: '60%',
        },
        showcaseOneDescription: {
            position: 'relative',
            bottom: '50vh',
            left: '40vw',
            width: '40vw',
            backgroundColor: theme.palette.primaryCard.main,
            padding: '5rem',
        },
        showcaseOneDescTitle: {
            fontSize: '25px',
            color: theme.palette.primary.main,
        },
        showcaseOneDescContent: {
            paddingTop: '2rem',
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
        },
        showcaseTwo: {
            position: 'relative',
            maxWidth: '60%',
            left: '31.5vw',
        },
        showcaseTwoWrapper: {
            position: 'relative',
            top: '-150px',
        },
        showcaseTwoDescription: {
            position: 'relative',
            bottom: '50vh',
            width: '40vw',
            backgroundColor: theme.palette.primaryCard.main,
            padding: '5rem',
        },
        showcaseTwoDescTitle: {
            fontSize: '25px',
            color: theme.palette.primary.main,
        },
        showcaseTwoDescContent: {
            paddingTop: '2rem',
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
        },
        actionButton: {
            marginTop: '2rem',
            fontStyle: 'italic',
            textTransform: 'capitalize',
            color: theme.palette.secondary.main,
        },
    };
};

export default styles;
