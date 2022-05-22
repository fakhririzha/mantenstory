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
    const [faqData, setFaqData] = React.useState(null);

    React.useEffect(() => {
        fetch('/api/astro/faq')
            .then((data) => data.json())
            .then((results) => {
                setFaqData(results);
            })
            .catch((err) => console.error('Error: ', err));
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container maxWidth="xl " sx={styles.headerContainer}>
            <Grid container spacing={3} sx={styles.headerGrid}>
                <Grid item xs={12} sm={12}>
                    <Box sx={styles.headerContent}>
                        <Typography sx={styles.title}>Frequently Asked Questions</Typography>
                        <Typography sx={styles.description}>Need answer? We got&quot;em :)</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={styles.accordionBox}>
                {faqData &&
                    faqData.data &&
                    faqData.data.map((faq) => (
                        <Accordion expanded={expanded === `panel${faq.id}`} onChange={handleChange(`panel${faq.id}`)}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                                <Typography sx={styles.accordionTitle}>{faq.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={styles.accordionDescription} dangerouslySetInnerHTML={{ __html: faq.description }} />
                            </AccordionDetails>
                        </Accordion>
                    ))}
            </Box>
        </Container>
    );
};

export default Header;
