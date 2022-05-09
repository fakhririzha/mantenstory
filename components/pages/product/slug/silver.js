/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import silverHeader from '../../../../assets/img/silver-header.png';

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

const Silver = () => {
    const styles = makeStyles();

    return (
        <Container maxWidth="xl" sx={styles.headerContainer}>
            <Grid container spacing={3} sx={styles.headerGrid}>
                <Grid item xs={12}>
                    <Box sx={styles.blogImage}>
                        <Image src={silverHeader} alt="About Header" />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={styles.headerContent}>
                        <Typography sx={styles.title}>Silver Series</Typography>
                        <Divider />
                        <Typography sx={styles.description}>
                            Undangan pernikahan model softcover template dengan koleksi desain dan ukuran yang variatif. Pada undangan silver series
                            hanya bisa merubah isi redaksi nya saja tanpa merubah desain dan warna.
                        </Typography>
                        <Typography sx={styles.descriptionSpec}>
                            Spesifikasi umum :
                            <br />
                            <br />
                            Berbahan fancy paper
                            <br />
                            Revisi 2x
                            <br />
                            Waktu pengerjaan 25 hari kerja
                            <br />
                            Plastic undangan Kupon terimakasih & kupon souvenir
                            <br />
                            (tanpa nama mempelai)
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

export default Silver;
