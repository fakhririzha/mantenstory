import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import makeStyles from './styles';

const HowToOrder = () => {
    const styles = makeStyles();

    return (
        <Container maxWidth="xl" sx={styles.howToOrderWrapper}>
            <Box>
                <Typography sx={styles.title}>How to Order ?</Typography>
            </Box>
            <Box sx={styles.htoContent}>
                <Grid container spacing={2} sx={styles.gridRowFirst}>
                    <Grid item xs={5} sx={styles.htoItemRight}>
                        <Typography sx={styles.htoItemTitle}>
                            Ketahui Price List
                        </Typography>
                        <Typography sx={styles.htoItemDesc}>
                            Pelajari price list dan pilih spesifikasi paket yang sesuai kebutuhan kamu.
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={styles.circleStepperWrapper}>
                            <Box sx={styles.circleStepper} component="div">
                                <Box sx={styles.circleStepperChildren} component="div" />
                            </Box>
                        </Box>
                        <Box sx={styles.lineStepper} />
                    </Grid>
                    <Grid item xs={5}>
                        {' '}
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={styles.gridRow}>
                    <Grid item xs={5}>
                        {' '}
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={styles.circleStepperWrapper}>
                            <Box sx={styles.circleStepper} component="div">
                                <Typography sx={styles.circleStepperChildrenText}>
                                    02
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5} sx={styles.htoItemLeft}>
                        <Typography sx={styles.htoItemTitle}>
                            Melakukan Down Payment (DP)
                        </Typography>
                        <Typography sx={styles.htoItemDesc}>
                            Lakukan DP 30-50% dari total harga.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={styles.gridRow}>
                    <Grid item xs={5} sx={styles.htoItemRight}>
                        <Typography sx={styles.htoItemTitle}>
                            Mengisi Data Mempelai
                        </Typography>
                        <Typography sx={styles.htoItemDesc}>
                            Mengisi data mempelai dan jelaskan konsep undangan impian kamu
                            beserta foto referensi pada link form data mempelai khusus untuk Gold & Platinum series.
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={styles.circleStepperWrapper}>
                            <Box sx={styles.circleStepper} component="div">
                                <Typography sx={styles.circleStepperChildrenText}>
                                    03
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        {' '}
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={styles.gridRow}>
                    <Grid item xs={5}>
                        {' '}
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={styles.circleStepperWrapper}>
                            <Box sx={styles.circleStepper} component="div">
                                <Typography sx={styles.circleStepperChildrenText}>
                                    04
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5} sx={styles.htoItemLeft}>
                        <Typography sx={styles.htoItemTitle}>
                            Pengerjaan Desain
                        </Typography>
                        <Typography sx={styles.htoItemDesc}>
                            Pembuatan desain akan dimulai setelah pembayaran DP diterima.
                            Untuk desain custom (platinum) client akan mendapatkan akses desainer khusus.
                            Pengerjaan desain selesai paling lama 7 hari kerja dan revisi maksimal tanpa merubah tema desain.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={styles.gridRow}>
                    <Grid item xs={5} sx={styles.htoItemRight}>
                        <Typography sx={styles.htoItemTitle}>
                            Konfirmasi Akhir
                        </Typography>
                        <Typography sx={styles.htoItemDesc}>
                            Client akan memperoleh rekap cetak, desain, serta spesifikasinya.
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={styles.circleStepperWrapper}>
                            <Box sx={styles.circleStepper} component="div">
                                <Typography sx={styles.circleStepperChildrenText}>
                                    05
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        {' '}
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={styles.gridRow}>
                    <Grid item xs={5}>
                        {' '}
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={styles.circleStepperWrapper}>
                            <Box sx={styles.circleStepper} component="div">
                                <Typography sx={styles.circleStepperChildrenText}>
                                    06
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5} sx={styles.htoItemLeft}>
                        <Typography sx={styles.htoItemTitle}>
                            Color Proofing
                        </Typography>
                        <Typography sx={styles.htoItemDesc}>
                            Pembuatan Dummy pra cetak dalam ukuran actual undangan untuk dilakukan
                            pengecekan warna (opsional) untuk gold & platinum.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={styles.gridRow}>
                    <Grid item xs={5} sx={styles.htoItemRight}>
                        <Typography sx={styles.htoItemTitle}>
                            Melakukan pelunasan
                        </Typography>
                        <Typography sx={styles.htoItemDesc}>
                            Sebelum proses produksi dimulai, Client diwajibkan Melakukan
                            pelunasan setelah pembuatan desain selesai (fix).
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={styles.circleStepperWrapper}>
                            <Box sx={styles.circleStepper} component="div">
                                <Typography sx={styles.circleStepperChildrenText}>
                                    07
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        {' '}
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={styles.gridRow}>
                    <Grid item xs={5}>
                        {' '}
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={styles.circleStepperWrapper}>
                            <Box sx={styles.circleStepper} component="div">
                                <Typography sx={styles.circleStepperChildrenText}>
                                    08
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5} sx={styles.htoItemLeft}>
                        <Typography sx={styles.htoItemTitle}>
                            Proses produksi (cetak)
                        </Typography>
                        <Typography sx={styles.htoItemDesc}>
                            Proses produksi akan dimulai setelah desain akhir di konfirmasi
                            oleh Client yang kemudian akan dikirim ke Client melalui email atau WA.
                            Proses produksi ini meliputi proses persiapan pra-cetak (pembuatan plate cetak),
                            proses cetak, dan proses finishing.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default HowToOrder;
