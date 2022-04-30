import { useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        footer: {
            backgroundColor: theme.palette.primaryCard.main,
        },
        footerContent: {
            padding: '5rem 0',
        },
        logoWrapper: {
            display: 'flex',
            justifyContent: 'center',
            padding: '5rem 0',
        },
        socialMediaWrapper: {
            display: 'flex',
            justifyContent: 'center',
        },
        socialMedia__item: {
            padding: '1rem',
        },
        socialMedia__itemWrapper: {
            backgroundColor: '#FFF',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        footerText: {
            paddingTop: '3rem',
            textAlign: 'center',
        },
        footerTextContent: {
            fontSize: '11px',
            fontStyle: 'italic',
            color: theme.palette.secondary.main,
        }
    };
};

export default styles;
