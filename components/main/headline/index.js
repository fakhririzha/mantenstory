/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import makeStyles from './styles';

const Main = () => {
    const styles = makeStyles();

    return (
        <Box sx={styles.headlineBox}>
            <Typography sx={styles.title}>Beginning of Memorable Story</Typography>
            <Grid container spacing={2} sx={styles.descriptionGrid}>
                <Grid item xs lg />
                <Grid item xs={12} lg={6} sx={styles.gridHeadline}>
                    <Typography sx={styles.description}>
                        Browse our beautiful invitations and wedding souvenir, featuring timeless, elegant designs. With high quality stationery
                        customised to fit your personal tastes and style make the most important first impression for your guests. Create your
                        memorable wedding with us.
                    </Typography>
                    <Typography sx={styles.descriptionFooter}>- Manten Story -</Typography>
                </Grid>
                <Grid item xs lg />
            </Grid>
        </Box>
    );
};

export default Main;
