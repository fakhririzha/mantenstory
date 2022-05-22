import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        showcaseBox: {
            marginTop: '2.5rem',
            [theme.breakpoints.up('tablet')]: {
                marginTop: '10rem',
            },
        },
        showcaseOneWrapper: {
            [theme.breakpoints.between('lg', 'xl')]: {
                marginLeft: '5rem',
                marginRight: '5rem',
            },
        },
        showcaseOne: {
            position: 'relative',
            maxWidth: '60%',
        },
        showcaseOneDescription: {
            [theme.breakpoints.between('lg', 'xl')]: {
                position: 'relative',
                bottom: '55vh',
                left: '42.5vw',
                width: '40vw',
                backgroundColor: theme.palette.primaryCard.main,
                padding: '2.5rem',
            },
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
            [theme.breakpoints.between('lg', 'xl')]: {
                marginLeft: '5rem',
                marginRight: '5rem',
            },
            position: 'relative',
            top: '-150px',
        },
        showcaseTwoDescription: {
            [theme.breakpoints.between('lg', 'xl')]: {
                position: 'relative',
                bottom: '55vh',
                width: '40vw',
                backgroundColor: theme.palette.primaryCard.main,
                padding: '2.5rem',
            },
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
        actionButtonMobile: {
            textTransform: 'capitalize',
            color: theme.palette.secondary.main,
        },
    };
};

export default styles;
