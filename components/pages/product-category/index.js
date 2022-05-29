/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Showcase from './showcase';

import makeStyles from './styles';

const Product = () => {
    const styles = makeStyles();

    return (
        <Container maxWidth="xl" sx={styles.headerContainer}>
            <Box sx={styles.headerContent}>
                <Typography sx={styles.title}>All Product Categories</Typography>
            </Box>
            <Box>
                <Showcase />
            </Box>
        </Container>
    );
};

export default Product;
