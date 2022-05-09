import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        testimonialWrapper: {
            paddingTop: '5rem',
        },
        titleWrapper: {
            paddingTop: '5rem',
            textAlign: 'center',
        },
        title: {
            fontSize: '25px',
            color: theme.palette.primary.main,
        },
        contentWrapper: {
            paddingTop: '7.5rem',
        },
        testimonialItem: {
            textAlign: 'center',
        },
        bigComma: {
            fontSize: '166px',
            lineHeight: '0.8',
            fontStyle: 'italic',
            color: theme.palette.bigComma.main,
        },
        testimonialItem__text: {
            fontSize: '18px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
            [theme.breakpoints.up('tablet')]: {
                padding: '0 8rem',
            },
        },
        testimonialItem__people: {
            fontSize: '19px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
            paddingTop: '5rem',
        },
        exampleWrapper: {
            paddingTop: '15rem',
        },
    };
};

export default styles;
