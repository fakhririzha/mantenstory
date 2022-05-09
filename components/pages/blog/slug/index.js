/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import headerAbout from '../../../../assets/img/blog-header-image.png';

import makeStyles from './styles';

const Divider = () => {
    const styles = makeStyles();

    return <Box sx={styles.divider} />;
};

const Header = () => {
    const styles = makeStyles();

    return (
        <Container maxWidth="xl" sx={styles.headerContainer}>
            <Grid container spacing={3} sx={styles.headerGrid}>
                <Grid item xs={12}>
                    <Box sx={styles.blogImage}>
                        <Image src={headerAbout} alt="About Header" />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={styles.headerContent}>
                        <Typography sx={styles.title}>About Us</Typography>
                        <Divider />
                        <Typography sx={styles.description}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br />
                            <br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br />
                            <br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
