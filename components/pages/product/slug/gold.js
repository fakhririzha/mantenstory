/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import goldHeader from '../../../../assets/img/gold-header.png';

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

const Gold = () => {
    const styles = makeStyles();

    return (
        <Container maxWidth="xl" sx={styles.headerContainer}>
            <Grid container spacing={3} sx={styles.headerGrid}>
                <Grid item xs={12}>
                    <Box sx={styles.blogImage}>
                        <Image src={goldHeader} alt="About Header" />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={styles.headerContent}>
                        <Typography sx={styles.title}>Gold Series</Typography>
                        <Divider />
                        <Typography sx={styles.description}>
                            Undangan pernikahan model single hardcover dengan koleksi desain yang sudah tersedia di katalog atau instagram
                            mantenstory.co. Pada undangan gold series, desain masih bisa di modifikasi seperti pergantian warna, mix motif ataupun
                            format tulisannya.
                        </Typography>
                        <Typography sx={styles.descriptionSpec}>
                            Spesifikasi umum :
                            <br />
                            <br />
                            Berbahan fancy paper dan Artcarton
                            <br />
                            Free hot print 1 titik (gold/silver)
                            <br />
                            Revisi 3x
                            <br />
                            Waktu pengerjaan 35 hari kerja
                            <br />
                            Plastic undangan
                            <br />
                            Kupon terimakasih & kupon souvenir
                            <br />
                            (dengan nama mempelai dan sesuai tema)
                            <br />
                            Hot foil 2 titik (gold/silver)
                            <br />
                            Guest book 2 pcs
                            <br />
                            Digital invitation (Jpg)
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

export default Gold;
