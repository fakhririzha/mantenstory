import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        howToOrderWrapper: {
            marginTop: '5rem',
            backgroundColor: theme.palette.primaryCard.main,
            maxWidth: '100% !important',
            paddingLeft: '0px !important',
            paddingRight: '0px !important',
            paddingBottom: '2.5rem',
        },
        mobileStepper: {
            padding: '2rem',
        },
        title: {
            paddingTop: '5rem',
            fontSize: '25px',
            color: theme.palette.primary.main,
            textAlign: 'center',
        },
        gridRow: {
            paddingBottom: '3rem',
        },
        gridRowFirst: {
            paddingBottom: '0',
        },
        htoContent: {
            paddingTop: '5rem',
            marginLeft: '15vw',
            marginRight: '15vw',
        },
        htoItemRight: {
            textAlign: 'right',
        },
        htoItemLeft: {
            textAlign: 'left',
        },
        htoItemTitle: {
            fontSize: '18px',
            color: theme.palette.primary.main,
            fontStyle: 'italic',
        },
        htoItemDesc: {
            paddingTop: '0.5rem',
            fontSize: '14px',
            color: theme.palette.secondary.main,
            fontStyle: 'italic',
        },
        lineStepper: {
            [theme.breakpoints.between('lg', 'xl')]: {
                height: '120px',
                width: '2px',
                zIndex: '0',
                backgroundColor: theme.palette.grey.main,
                position: 'relative',
                left: '4.5rem',
            },
            height: '120px',
            width: '2px',
            zIndex: '0',
            backgroundColor: theme.palette.grey.main,
            position: 'relative',
            left: '6.45rem',
        },
        circleStepper: {
            backgroundColor: '#FFF',
            borderRadius: '50%',
            width: '3rem',
            height: '3rem',
        },
        circleStepperChildren: {
            backgroundColor: theme.palette.grey.main,
            borderRadius: '50%',
            width: '2.25rem',
            height: '2.255rem',
            position: 'relative',
            top: '0.375rem',
            left: '0.375rem',
        },
        circleStepperChildrenText: {
            fontSize: '25px',
            textAlign: 'center',
            color: theme.palette.primary.main,
        },
        circleStepperWrapper: {
            display: 'flex',
            justifyContent: 'center',
        },
    };
};

export default styles;
