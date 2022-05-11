/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import Fade from 'react-reveal/Fade';

import useMediaQuery from '@mui/material/useMediaQuery';

import productOne from '../../../../assets/img/product-1.png';
import productTwo from '../../../../assets/img/product-2.png';
import productThree from '../../../../assets/img/product-3.png';

import makeStyles from './styles';

const Main = () => {
    const styles = makeStyles();

    const matchMobile = useMediaQuery('(min-width:0px) and (max-width:719px)');
    const matchDesktop = useMediaQuery('(min-width:1200px)');

    return (
        <Box sx={styles.productBox}>
            {matchDesktop && (
                <>
                    <Fade right>
                        <Box>
                            <Box sx={styles.productOne}>
                                <Image src={productOne} alt="logo" />
                            </Box>
                            <Box sx={styles.productOneDescription}>
                                <Typography sx={styles.productOneDescTitle}>Silver Series</Typography>
                                <Typography sx={styles.productOneDescContent}>
                                    Undangan pernikahan model softcover template dengan koleksi desain dan ukuran yang variatif. Pada undangan silver
                                    series hanya bisa merubah isi redaksi nya saja tanpa merubah desain dan warna.
                                </Typography>
                                <Link href="/product/silver.html" passHref>
                                    <Button variant="contained" sx={styles.actionButton} color="primaryCard">
                                        See Catalogue
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Fade>
                    <Fade left>
                        <Box sx={styles.productTwoWrapper}>
                            <Box sx={styles.productTwo}>
                                <Image src={productTwo} alt="logo" />
                            </Box>
                            <Box sx={styles.productTwoDescription}>
                                <Typography sx={styles.productTwoDescTitle}>Gold Series</Typography>
                                <Typography sx={styles.productTwoDescContent}>
                                    Undangan pernikahan model single hardcover dengan koleksi desain yang sudah tersedia di katalog atau instagram
                                    mantenstory.co. Pada undangan gold series, desain masih bisa di modifikasi seperti pergantian warna, mix motif
                                    ataupun format tulisannya.
                                </Typography>
                                <Link href="/product/gold.html" passHref>
                                    <Button variant="contained" sx={styles.actionButton} color="primaryCard">
                                        See Catalogue
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Fade>
                    <Fade right>
                        <Box sx={styles.productThreeWrapper}>
                            <Box sx={styles.productThree}>
                                <Image src={productThree} alt="logo" />
                            </Box>
                            <Box sx={styles.productThreeDescription}>
                                <Typography sx={styles.productThreeDescTitle}>Platinum Series</Typography>
                                <Typography sx={styles.productThreeDescContent}>
                                    Undangan pernikahan model single hardcover atau trifold hardcover dengan desain custom yang lebih personal dan
                                    eksklusive. Pada undangan tipe platinum client memperoleh akses ke team desainer.
                                </Typography>
                                <Link href="/product/platinum.html" passHref>
                                    <Button variant="contained" sx={styles.actionButton} color="primaryCard">
                                        See Catalogue
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Fade>
                </>
            )}
            {matchMobile && (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardMedia component="img" height="140" image="/static/assets/img/product-1.png" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Silver Series
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Undangan pernikahan model softcover template dengan koleksi desain dan ukuran yang variatif. Pada undangan silver
                                    series hanya bisa merubah isi redaksi nya saja tanpa merubah desain dan warna.
                                </Typography>
                            </CardContent>
                            <CardActions sx={styles.cardActions}>
                                <Link href="/product/silver.html" passHref>
                                    <Button variant="contained" size="small" color="primaryCard" sx={{ minWidth: '100%' }}>
                                        See Catalogue
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardMedia component="img" height="140" image="/static/assets/img/product-2.png" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Gold Series
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Undangan pernikahan model single hardcover dengan koleksi desain yang sudah tersedia di katalog atau instagram
                                    mantenstory.co. Pada undangan gold series, desain masih bisa di modifikasi seperti pergantian warna, mix motif
                                    ataupun format tulisannya.
                                </Typography>
                            </CardContent>
                            <CardActions sx={styles.cardActions}>
                                <Link href="/product/gold.html" passHref>
                                    <Button variant="contained" size="small" color="primaryCard" sx={{ minWidth: '100%' }}>
                                        See Catalogue
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardMedia component="img" height="140" image="/static/assets/img/product-3.png" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Platinum Series
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Undangan pernikahan model single hardcover atau trifold hardcover dengan desain custom yang lebih personal dan
                                    eksklusive. Pada undangan tipe platinum client memperoleh akses ke team desainer.
                                </Typography>
                            </CardContent>
                            <CardActions sx={styles.cardActions}>
                                <Link href="/product/platinum.html" passHref>
                                    <Button variant="contained" size="small" color="primaryCard" sx={{ minWidth: '100%' }}>
                                        See Catalogue
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default Main;
