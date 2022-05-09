/* eslint-disable max-len */
import * as React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { alpha, styled } from '@mui/material/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import makeStyles from './styles';

const Accordion = styled((props) => (
    <MuiAccordion
        {...props}
    />
))(() => ({
    margin: '1rem',
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(({ theme }) => ({
    backgroundColor: theme.palette.primaryCard.main,
    padding: '1rem',
    [theme.breakpoints.up('tablet')]: {
        padding: '1rem 5rem',
    },
}));

const AccordionDetails = styled((props) => <MuiAccordionDetails {...props} />)(({ theme }) => ({
    borderTop: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
    backgroundColor: theme.palette.primaryCard.main,
    padding: '1rem',
    [theme.breakpoints.up('tablet')]: {
        padding: '1rem 5rem',
    },
}));

const Header = () => {
    const styles = makeStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container maxWidth="xl " sx={styles.headerContainer}>
            <Grid container spacing={3} sx={styles.headerGrid}>
                <Grid item xs={12} sm={12}>
                    <Box sx={styles.headerContent}>
                        <Typography sx={styles.title}>Frequently Asked Questions</Typography>
                        <Typography sx={styles.description}>
                            Need answer? We got&quot;em :)
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={styles.accordionBox}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={styles.accordionTitle}>
                            Kapan waktu terbaik pesan undangan?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={styles.accordionDescription}>
                            Waktu terbaik untuk melakukan pesanan maksimal adalah H-2 bulan untuk undangan softcover (silver series) dan H-4 bulan untuk undangan hardcover (gold & platinum series). Hal ini dilakukan dengan mempertimbangkan hal-hal berikut :
                            <br />
                            <br />
                            Pemesanan jauh-jauh hari memiliki kesempatan untuk mendapatkan harga yang lebih murah. Perlu diingat bahwa harga undangan dapat berubah sewaktu-waktu.
                            <br />
                            <br />
                            Dalam proses produksi kendala teknis dapat terjadi yang memungkinkan terjadinya keterlambatan proses pengiriman, sehingga pemesanan lebih awal dimaksudkan untuk menghindari proses yang terburu-buru.
                            <br />
                            <br />
                            Jika seluruh proses produksi berjalan normal, pengiriman lebih awal akan membantu calon pengantin dalam mempersiapkan pernikahan. Calon pengantin dapat lebih fokus mengurus hal-hal yang lebih penting menjelang hari H tanpa mengkhawatirkan perihal undangan.
                            <br />
                            <br />
                            Apakah menyediakan paket sampel undangan?
                            Kami menyediakan paket sampel undangan yang bisa kalian order. Untuk paket sampel kami kirimkan secara random dengan isi tipe silver, gold dan platinum series.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={styles.accordionTitle}>
                            Apakah bisa ganti desain?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={styles.accordionTitle}>
                            Berapa lama proses produksi?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={styles.accordionTitle}>
                            Apakah ada minimal order?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={styles.accordionTitle}>
                            Apakah ada sampel sebelum cetak?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={styles.accordionTitle}>
                            Bagaimana jika pesanan ingin dibatalkan atau ditunda?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
};

export default Header;
