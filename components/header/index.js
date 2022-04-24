import * as React from 'react';
import Box from '@mui/material/Box';

import makeStyles from './styles';

const Header = () => {
    const styles = makeStyles();

    return (
        <Box sx={styles.headerBox} />
    );
};

export default Header;
