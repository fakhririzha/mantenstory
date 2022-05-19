/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Fade from 'react-reveal/Fade';

import useMediaQuery from '@mui/material/useMediaQuery';

import makeStyles from './styles';

const Main = () => {
    const styles = makeStyles();

    const matchMobile = useMediaQuery('(min-width:0px) and (max-width:719px)');
    const matchDesktop = useMediaQuery('(min-width:1200px)');

    return (
        <Box sx={styles.whyChooseUs}>
            <Typography sx={styles.title}>Why Choose Us?</Typography>
            {matchDesktop && (
                <Box sx={styles.description}>
                    <Fade left>
                        <Grid container spacing={2} sx={styles.descRow}>
                            <Grid item xs>
                                <Grid container>
                                    <Grid item xs={2} sx={styles.descNumber}>
                                        01
                                    </Grid>
                                    <Grid item xs={10} sx={styles.descContent}>
                                        Berpengalaman selama 5 tahun
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs>
                                <Grid container>
                                    <Grid item xs={2} sx={styles.descNumber}>
                                        06
                                    </Grid>
                                    <Grid item xs={10} sx={styles.descContent}>
                                        Memiliki store yang nyaman dan aestetik
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade right>
                        <Grid container spacing={2} sx={styles.descRow}>
                            <Grid item xs>
                                <Grid container>
                                    <Grid item xs={2} sx={styles.descNumber}>
                                        02
                                    </Grid>
                                    <Grid item xs={10} sx={styles.descContent}>
                                        Menghadirkan variasi pilihan produk (undangan/souvenir) dengan desain yang inovatif
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs>
                                <Grid container>
                                    <Grid item xs={2} sx={styles.descNumber}>
                                        07
                                    </Grid>
                                    <Grid item xs={10} sx={styles.descContent}>
                                        Memiliki pelayanan yang ramah dan team desain yang bersahabat
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade left>
                        <Grid container spacing={2} sx={styles.descRow}>
                            <Grid item xs>
                                <Grid container>
                                    <Grid item xs={2} sx={styles.descNumber}>
                                        03
                                    </Grid>
                                    <Grid item xs={10} sx={styles.descContent}>
                                        Memiliki variasi harga yang sesuai kebutuhan client
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs>
                                <Grid container>
                                    <Grid item xs={2} sx={styles.descNumber}>
                                        08
                                    </Grid>
                                    <Grid item xs={10} sx={styles.descContent}>
                                        Mengutamakan kepuasan client
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade right>
                        <Grid container spacing={2} sx={styles.descRow}>
                            <Grid item xs>
                                <Grid container>
                                    <Grid item xs={2} sx={styles.descNumber}>
                                        04
                                    </Grid>
                                    <Grid item xs={10} sx={styles.descContent}>
                                        Memiliki layanan yang fleksibel disetiap produk undangan
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs>
                                <Grid container>
                                    <Grid item xs={2} sx={styles.descNumber}>
                                        09
                                    </Grid>
                                    <Grid item xs={10} sx={styles.descContentLast}>
                                        Menyajikan konten-konten tentang pengetahuan, tips dan inspirasi pernikahan sehingga menjadi solusi pra/pasca
                                        menikah bagi calon pengantin
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade left>
                        <Grid container spacing={2} sx={styles.descRow}>
                            <Grid item xs>
                                <Grid container>
                                    <Grid item xs={2} sx={styles.descNumber}>
                                        05
                                    </Grid>
                                    <Grid item xs={10} sx={styles.descContent}>
                                        Memberikan free dan promo disetiap kesempatan
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs>
                                {' '}
                            </Grid>
                        </Grid>
                    </Fade>
                </Box>
            )}
            {matchMobile && (
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={styles.mobileGrid}>
                            <Grid container>
                                <Grid item xs={2} sx={styles.descNumber}>
                                    01
                                </Grid>
                                <Grid item xs={10} sx={styles.descContent}>
                                    Berpengalaman selama 5 tahun
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={styles.mobileGrid}>
                            <Grid container>
                                <Grid item xs={2} sx={styles.descNumber}>
                                    02
                                </Grid>
                                <Grid item xs={10} sx={styles.descContent}>
                                    Menghadirkan variasi pilihan produk (undangan/souvenir) dengan desain yang inovatif
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={styles.mobileGrid}>
                            <Grid container>
                                <Grid item xs={2} sx={styles.descNumber}>
                                    03
                                </Grid>
                                <Grid item xs={10} sx={styles.descContent}>
                                    Memiliki variasi harga yang sesuai kebutuhan client
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={styles.mobileGrid}>
                            <Grid container>
                                <Grid item xs={2} sx={styles.descNumber}>
                                    04
                                </Grid>
                                <Grid item xs={10} sx={styles.descContent}>
                                    Memiliki layanan yang fleksibel disetiap produk undangan
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={styles.mobileGrid}>
                            <Grid container>
                                <Grid item xs={2} sx={styles.descNumber}>
                                    05
                                </Grid>
                                <Grid item xs={10} sx={styles.descContent}>
                                    Memberikan free dan promo disetiap kesempatan
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={styles.mobileGrid}>
                            <Grid container>
                                <Grid item xs={2} sx={styles.descNumber}>
                                    06
                                </Grid>
                                <Grid item xs={10} sx={styles.descContent}>
                                    Memiliki store yang nyaman dan aestetik
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={styles.mobileGrid}>
                            <Grid container>
                                <Grid item xs={2} sx={styles.descNumber}>
                                    07
                                </Grid>
                                <Grid item xs={10} sx={styles.descContent}>
                                    Memiliki pelayanan yang ramah dan team desain yang bersahabat
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={styles.mobileGrid}>
                            <Grid container>
                                <Grid item xs={2} sx={styles.descNumber}>
                                    08
                                </Grid>
                                <Grid item xs={10} sx={styles.descContent}>
                                    Mengutamakan kepuasan client
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={styles.mobileGrid}>
                            <Grid container>
                                <Grid item xs={2} sx={styles.descNumber}>
                                    09
                                </Grid>
                                <Grid item xs={10} sx={styles.descContent}>
                                    Menyajikan konten-konten tentang pengetahuan, tips dan inspirasi pernikahan sehingga menjadi solusi pra/pasca
                                    menikah bagi calon pengantin
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </Box>
    );
};

export default Main;
