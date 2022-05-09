/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import platinumHeader from '../../../../assets/img/platinum-header.png';

import productOne from '../../../../assets/img/gambar-produk-1.png';
import productTwo from '../../../../assets/img/gambar-produk-2.png';
import productThree from '../../../../assets/img/gambar-produk-3.png';
import productFour from '../../../../assets/img/gambar-produk-4.png';
import productFive from '../../../../assets/img/gambar-produk-5.png';
import productSix from '../../../../assets/img/gambar-produk-6.png';

import makeStyles from './styles';

const Divider = () => {
    const styles = makeStyles();

    return <Box sx={styles.divider} />;
};

const Platinum = () => {
    const styles = makeStyles();

    return (
        <Container maxWidth="xl" sx={styles.headerContainer}>
            <Grid container spacing={3} sx={styles.headerGrid}>
                <Grid item xs={12}>
                    <Box sx={styles.blogImage}>
                        <Image src={platinumHeader} alt="About Header" />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={styles.headerContent}>
                        <Typography sx={styles.title}>Platinum Series</Typography>
                        <Divider />
                        <Typography sx={styles.description}>
                            Undangan pernikahan model single hardcover atau trifold hardcover dengan desain custom yang lebih personal dan eksklusive.
                            Pada undangan tipe platinum client memperoleh akses ke team desainer.
                        </Typography>
                        <Typography sx={styles.descriptionSpec}>
                            Spesifikasi umum :
                            <br />
                            <br />
                            Berbahan artcarton/fancy paper dengan lapisan board tebal
                            <br />
                            Hot foil 2 titik (emas/silver)
                            <br />
                            Guest book 2 pcs
                            <br />
                            Digital invitation (Jpg)
                            <br />
                            Plastic Label stiker tamu
                            <br />
                            Thanks card & souvenir card
                            <br />
                            Denah terpisah (khusus untuk undangan single hardcover)
                            <br />
                            Logo initial
                            <br />
                            Revisi 3x
                            <br />
                            Waktu pengerjaan estimasi 35-48 hari kerja (tergantung kesulitan)
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={styles.productGrid}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={styles.productImage}>
                        <Image src={productOne} alt="Product One" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={styles.productImage}>
                        <Image src={productTwo} alt="Product Two" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={styles.productImage}>
                        <Image src={productThree} alt="Product Three" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={styles.productImage}>
                        <Image src={productFour} alt="Product Four" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={styles.productImage}>
                        <Image src={productFive} alt="Product Five" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={styles.productImage}>
                        <Image src={productSix} alt="Product Six" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Platinum;
