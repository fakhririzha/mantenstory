import { alpha, useTheme } from '@mui/material/styles';

const styles = () => {
    const theme = useTheme();

    return {
        appBar: {
            backgroundColor: theme.palette.white.main,
            boxShadow: 'none',
        },
        toolBar: {
            minHeight: '10rem !important',
        },
        logoDesktop: {
            width: '120px',
            height: '60px',
            mr: 2,
            display: {
                xs: 'none',
                md: 'flex',
            },
            '& :hover': {
                cursor: 'pointer',
            },
        },
        logoMobile: {
            width: '80px',
            height: '40px',
            // flexGrow: 1,
            display: {
                xs: 'flex',
                md: 'none',
            },
        },
        menuNav: {
            flexGrow: 1,
            display: {
                xs: 'none',
                md: 'flex',
            },
            justifyContent: {
                laptop: 'end',
            },
        },
        menuNavBtn: {
            my: 2,
            color: theme.palette.secondary.main,
            display: 'block',
            textTransform: 'capitalize',
            fontSize: '20px',
            fontStyle: 'italic',
        },
        menuNavBtnActive: {
            my: 2,
            color: theme.palette.secondary.main,
            display: 'block',
            textTransform: 'capitalize',
            fontSize: '20px',
            fontStyle: 'italic',
            borderBottom: `2px solid ${alpha(theme.palette.secondary.main, 0.8)}`,
        },
    };
};

export default styles;
