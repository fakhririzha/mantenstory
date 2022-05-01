import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        productBox: {
            marginTop: '2.5rem',
        },
        productOne: {
            position: 'relative',
            maxWidth: '60%',
        },
        productOneDescription: {
            position: 'relative',
            bottom: '50vh',
            left: '40vw',
            width: '40vw',
            backgroundColor: theme.palette.primaryCard.main,
            padding: '5rem',
        },
        productOneDescTitle: {
            fontSize: '25px',
            color: theme.palette.primary.main,
        },
        productOneDescContent: {
            paddingTop: '2rem',
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
        },
        productTwo: {
            position: 'relative',
            maxWidth: '60%',
            left: '31.5vw',
        },
        productTwoWrapper: {
            position: 'relative',
            top: '-150px',
        },
        productTwoDescription: {
            position: 'relative',
            bottom: '50vh',
            width: '45vw',
            backgroundColor: theme.palette.primaryCard.main,
            padding: '5rem',
        },
        productTwoDescTitle: {
            fontSize: '25px',
            color: theme.palette.primary.main,
        },
        productTwoDescContent: {
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
        productThreeWrapper: {
            position: 'relative',
            top: '-250px',
        },
        productThree: {
            position: 'relative',
            maxWidth: '60%',
        },
        productThreeDescription: {
            position: 'relative',
            bottom: '50vh',
            left: '40vw',
            width: '40vw',
            backgroundColor: theme.palette.primaryCard.main,
            padding: '5rem',
        },
        productThreeDescTitle: {
            fontSize: '25px',
            color: theme.palette.primary.main,
        },
        productThreeDescContent: {
            paddingTop: '2rem',
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
        },
    };
};

export default styles;
