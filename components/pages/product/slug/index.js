/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useRouter } from 'next/router';

import stripHtmlTags from '@components/helpers/stripHtmlTags';
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

const SingleProduct = () => {
    const router = useRouter();

    const [productData, setProductData] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/astro/product/getSingleProductByUrlKey/${stripHtmlTags(router.query.slug)}`)
            .then((response) => response.json())
            .then((product) => {
                setProductData(product);
            })
            .catch((err) => console.error('Error: ', err));
    }, []);

    const styles = makeStyles();

    return (
        <Container maxWidth="xl" sx={styles.headerContainer}>
            {productData && productData.data && (
                <>
                    <Grid container spacing={3} sx={styles.headerGrid}>
                        <Grid item xs={12}>
                            <Box sx={styles.blogImage}>
                                <img style={styles.imgHeader} src={productData.data[0].image_base64} alt={productData.data[0].title} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={styles.headerContent}>
                                <Typography sx={styles.title}>{productData.data[0].title}</Typography>
                                <Divider />
                                <div style={styles.description} dangerouslySetInnerHTML={{ __html: productData.data[0].description }} />
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
                </>
            )}
        </Container>
    );
};

export default SingleProduct;
