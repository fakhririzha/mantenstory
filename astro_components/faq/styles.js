import { useTheme } from '@mui/material/styles';

const styles = () => {
    // eslint-disable-next-line no-unused-vars
    const theme = useTheme();

    return {
        divider: {
            maxWidth: '100%',
            height: '2px',
            borderTop: '1px solid #707070',
            paddingBottom: '5rem',
        },
    };
};

export default styles;
