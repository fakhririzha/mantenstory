/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import productOne from '../../../../assets/img/product-1.png';
import productTwo from '../../../../assets/img/product-2.png';
import productThree from '../../../../assets/img/product-3.png';

import makeStyles from './styles';

const Main = () => {
    const styles = makeStyles();

    return (
        <Box sx={styles.productBox}>
            <Box>
                <Box sx={styles.productOne}>
                    <Image src={productOne} alt="logo" />
                </Box>
                <Box sx={styles.productOneDescription}>
                    <Typography sx={styles.productOneDescTitle}>Silver Series</Typography>
                    <Typography sx={styles.productOneDescContent}>
                        Undangan pernikahan model softcover template dengan koleksi desain dan ukuran yang variatif. Pada undangan silver series hanya
                        bisa merubah isi redaksi nya saja tanpa merubah desain dan warna.
                    </Typography>
                    <Link href="/product/silver.html" passHref>
                        <Button variant="contained" sx={styles.actionButton} color="primaryCard">
                            See Catalogue
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box sx={styles.productTwoWrapper}>
                <Box sx={styles.productTwo}>
                    <Image src={productTwo} alt="logo" />
                </Box>
                <Box sx={styles.productTwoDescription}>
                    <Typography sx={styles.productTwoDescTitle}>Gold Series</Typography>
                    <Typography sx={styles.productTwoDescContent}>
                        Undangan pernikahan model single hardcover dengan koleksi desain yang sudah tersedia di katalog atau instagram mantenstory.co.
                        Pada undangan gold series, desain masih bisa di modifikasi seperti pergantian warna, mix motif ataupun format tulisannya.
                    </Typography>
                    <Link href="/product/gold.html" passHref>
                        <Button variant="contained" sx={styles.actionButton} color="primaryCard">
                            See Catalogue
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box sx={styles.productThreeWrapper}>
                <Box sx={styles.productThree}>
                    <Image src={productThree} alt="logo" />
                </Box>
                <Box sx={styles.productThreeDescription}>
                    <Typography sx={styles.productThreeDescTitle}>Platinum Series</Typography>
                    <Typography sx={styles.productThreeDescContent}>
                        Undangan pernikahan model single hardcover atau trifold hardcover dengan desain custom yang lebih personal dan eksklusive.
                        Pada undangan tipe platinum client memperoleh akses ke team desainer.
                    </Typography>
                    <Link href="/product/platinum.html" passHref>
                        <Button variant="contained" sx={styles.actionButton} color="primaryCard">
                            See Catalogue
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Main;
