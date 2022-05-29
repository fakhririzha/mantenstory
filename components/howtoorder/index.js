/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import 'animate.css';
import Fade from 'react-reveal/Fade';

import useMediaQuery from '@mui/material/useMediaQuery';

import makeStyles from './styles';

const steps = [
    {
        label: 'Ketahui Price List',
        description: 'Pelajari price list dan pilih spesifikasi paket yang sesuai kebutuhan kamu.',
    },
    {
        label: 'Melakukan Down Payment (DP)',
        description: 'Lakukan DP 30-50% dari total harga',
    },
    {
        label: 'Mengisi Data Mempelai',
        description:
            'Mengisi data mempelai dan jelaskan konsep undangan impian kamu beserta foto referensi pada link form data mempelai khusus untuk Gold & Platinum Series',
    },
    {
        label: 'Pengerjaan Desain',
        description:
            'Pembuatan desain akan dimulai setelah pembayaran DP diterima. Untuk desain custom (platinum) client akan mendapatkan akses desainer khusus. Pengerjaan desain selesai paling lama 7 hari kerja dan revisi maksimal 3x tanpa merubah tema desain',
    },
    {
        label: 'Konfirmasi Akhir',
        description: 'Client akan memperoleh rekap cetak, desain serta spesifikasinya',
    },
    {
        label: 'Color Proofing',
        description:
            'Pembuatan Dummy pra cetak dalam ukuran actual undangan untuk dilakukan pengecekan warna (opsional) untuk gold & platinum series',
    },
    {
        label: 'Melakukan Pelunasan',
        description: 'Sebelum proses produksi dimulai, Client diwajibkan melakukan pelunasan setelah pembuatan desain selesai (fix)',
    },
    {
        label: 'Proses produksi (cetak)',
        description:
            'Proses produksi akan dimulai setelah desain akhir di konfirmasi oleh customer yang akan dikirim ke customer melalui email atau whatsapp. Proses produksi ini meliputi proses persiapan pra cetak (pembuatan plate cetak), proses cetak, dan proses finishing.',
    },
];

const HowToOrder = () => {
    const styles = makeStyles();

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const matchMobile = useMediaQuery('(min-width:0px) and (max-width:719px)');
    const matchDesktop = useMediaQuery('(min-width:1200px)');

    return (
        <Container maxWidth="xl" sx={styles.howToOrderWrapper}>
            <Box>
                <Typography sx={styles.title}>How to Order ?</Typography>
            </Box>
            {matchDesktop && (
                <Box sx={styles.htoContent}>
                    <Grid container spacing={2} sx={styles.gridRowFirst}>
                        <Grid item xs={5} sx={styles.htoItemRight}>
                            <Fade left>
                                <Typography sx={styles.htoItemTitle}>Ketahui Price List</Typography>
                                <Typography sx={styles.htoItemDesc}>
                                    Pelajari price list dan pilih spesifikasi paket yang sesuai kebutuhan kamu.
                                </Typography>
                            </Fade>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={styles.circleStepperWrapper}>
                                <Box sx={styles.circleStepper} component="div">
                                    <Typography sx={styles.circleStepperChildrenText}>01</Typography>
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
                                    <Typography sx={styles.circleStepperChildrenText}>02</Typography>
                                </Box>
                            </Box>
                            <Box sx={styles.lineStepper} />
                        </Grid>
                        <Grid item xs={5} sx={styles.htoItemLeft}>
                            <Fade right>
                                <Typography sx={styles.htoItemTitle}>Melakukan Down Payment (DP)</Typography>
                                <Typography sx={styles.htoItemDesc}>Lakukan DP 30-50% dari total harga.</Typography>
                            </Fade>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={styles.gridRow}>
                        <Grid item xs={5} sx={styles.htoItemRight}>
                            <Fade left>
                                <Typography sx={styles.htoItemTitle}>Mengisi Data Mempelai</Typography>
                                <Typography sx={styles.htoItemDesc}>
                                    Mengisi data mempelai dan jelaskan konsep undangan impian kamu beserta foto referensi pada link form data mempelai
                                    khusus untuk Gold & Platinum series.
                                </Typography>
                            </Fade>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={styles.circleStepperWrapper}>
                                <Box sx={styles.circleStepper} component="div">
                                    <Typography sx={styles.circleStepperChildrenText}>03</Typography>
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
                                    <Typography sx={styles.circleStepperChildrenText}>04</Typography>
                                </Box>
                            </Box>
                            <Box sx={styles.lineStepper} />
                        </Grid>
                        <Grid item xs={5} sx={styles.htoItemLeft}>
                            <Fade right>
                                <Typography sx={styles.htoItemTitle}>Pengerjaan Desain</Typography>
                                <Typography sx={styles.htoItemDesc}>
                                    Pembuatan desain akan dimulai setelah pembayaran DP diterima. Untuk desain custom (platinum) client akan
                                    mendapatkan akses desainer khusus. Pengerjaan desain selesai paling lama 7 hari kerja dan revisi maksimal tanpa
                                    merubah tema desain.
                                </Typography>
                            </Fade>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={styles.gridRow}>
                        <Grid item xs={5} sx={styles.htoItemRight}>
                            <Fade left>
                                <Typography sx={styles.htoItemTitle}>Konfirmasi Akhir</Typography>
                                <Typography sx={styles.htoItemDesc}>Client akan memperoleh rekap cetak, desain, serta spesifikasinya.</Typography>
                            </Fade>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={styles.circleStepperWrapper}>
                                <Box sx={styles.circleStepper} component="div">
                                    <Typography sx={styles.circleStepperChildrenText}>05</Typography>
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
                                    <Typography sx={styles.circleStepperChildrenText}>06</Typography>
                                </Box>
                            </Box>
                            <Box sx={styles.lineStepper} />
                        </Grid>
                        <Grid item xs={5} sx={styles.htoItemLeft}>
                            <Fade right>
                                <Typography sx={styles.htoItemTitle}>Color Proofing</Typography>
                                <Typography sx={styles.htoItemDesc}>
                                    Pembuatan Dummy pra cetak dalam ukuran actual undangan untuk dilakukan pengecekan warna (opsional) untuk gold &
                                    platinum.
                                </Typography>
                            </Fade>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={styles.gridRow}>
                        <Grid item xs={5} sx={styles.htoItemRight}>
                            <Fade left>
                                <Typography sx={styles.htoItemTitle}>Melakukan pelunasan</Typography>
                                <Typography sx={styles.htoItemDesc}>
                                    Sebelum proses produksi dimulai, Client diwajibkan Melakukan pelunasan setelah pembuatan desain selesai (fix).
                                </Typography>
                            </Fade>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={styles.circleStepperWrapper}>
                                <Box sx={styles.circleStepper} component="div">
                                    <Typography sx={styles.circleStepperChildrenText}>07</Typography>
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
                                    <Typography sx={styles.circleStepperChildrenText}>08</Typography>
                                </Box>
                            </Box>
                            <Box sx={styles.lineStepper} />
                        </Grid>
                        <Grid item xs={5} sx={styles.htoItemLeft}>
                            <Fade right>
                                <Typography sx={styles.htoItemTitle}>Proses produksi (cetak)</Typography>
                                <Typography sx={styles.htoItemDesc}>
                                    Proses produksi akan dimulai setelah desain akhir di konfirmasi oleh Client yang kemudian akan dikirim ke Client
                                    melalui email atau WA. Proses produksi ini meliputi proses persiapan pra-cetak (pembuatan plate cetak), proses
                                    cetak, dan proses finishing.
                                </Typography>
                            </Fade>
                        </Grid>
                    </Grid>
                </Box>
            )}
            {matchMobile && (
                <Box sx={styles.mobileStepper}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button variant="contained" color="primaryCard" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }} color="primaryCard">
                            <Typography>Segera wujudkan pernikahan impian anda!</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>
            )}
        </Container>
    );
};

export default HowToOrder;
