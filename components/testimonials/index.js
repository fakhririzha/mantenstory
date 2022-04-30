import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import exampleOne from '../../assets/img/example-1.png';
import exampleTwo from '../../assets/img/example-2.png';
import exampleThree from '../../assets/img/example-3.png';
import exampleFour from '../../assets/img/example-4.png';

import makeStyles from './styles';

const Testimonials = () => {
    const styles = makeStyles();

    return (
        <Container maxWidth="xl" sx={styles.testimonialWrapper}>
            <Box sx={styles.titleWrapper}>
                <Typography sx={styles.title}>What They Said ?</Typography>
            </Box>
            <Box sx={styles.contentWrapper}>
                <Grid container spacing={2} sx={styles.gridRow}>
                    <Grid item xs={6}>
                        <Box sx={styles.testimonialItem}>
                            <Typography sx={styles.bigComma}>
                                &ldquo;
                            </Typography>
                            <Typography sx={styles.testimonialItem__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <Typography sx={styles.testimonialItem__people}>
                                - Customer Name -
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={styles.testimonialItem}>
                            <Typography sx={styles.bigComma}>
                                &ldquo;
                            </Typography>
                            <Typography sx={styles.testimonialItem__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <Typography sx={styles.testimonialItem__people}>
                                - Customer Name -
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={styles.exampleWrapper}>
                <Grid container maxWidth="xl" spacing={1}>
                    <Grid item xs={3}>
                        <Image src={exampleOne} alt="example-1" />
                    </Grid>
                    <Grid item xs={3}>
                        <Image src={exampleTwo} alt="example-2" />
                    </Grid>
                    <Grid item xs={3}>
                        <Image src={exampleThree} alt="example-3" />
                    </Grid>
                    <Grid item xs={3}>
                        <Image src={exampleFour} alt="example-4" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonials;
