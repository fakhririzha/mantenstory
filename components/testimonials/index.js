import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

// import InstagramEmbed from 'react-instagram-embed';

import { useKeenSlider } from 'keen-slider/react';
import exampleOne from '../../assets/img/example-1.png';
import exampleTwo from '../../assets/img/example-2.png';
import exampleThree from '../../assets/img/example-3.png';
import exampleFour from '../../assets/img/example-4.png';

import 'keen-slider/keen-slider.min.css';

import makeStyles from './styles';

const Testimonials = () => {
    const styles = makeStyles();

    const [refCallback] = useKeenSlider({
        loop: true,
        breakpoints: {
            '(max-width:719px)': {
                slides: { perView: 1 },
            },
        },
        slides: {
            perView: 2,
        },
    });

    return (
        <Container maxWidth="xl" sx={styles.testimonialWrapper}>
            <Box sx={styles.titleWrapper}>
                <Typography sx={styles.title}>What They Said ?</Typography>
            </Box>
            <Box sx={styles.contentWrapper}>
                <div ref={refCallback} className="keen-slider">
                    <div className="keen-slider__slide">
                        <Box sx={styles.testimonialItem}>
                            <Typography sx={styles.bigComma}>&ldquo;</Typography>
                            <Typography sx={styles.testimonialItem__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <Typography sx={styles.testimonialItem__people}>- Customer Name -</Typography>
                        </Box>
                    </div>
                    <div className="keen-slider__slide">
                        <Box sx={styles.testimonialItem}>
                            <Typography sx={styles.bigComma}>&ldquo;</Typography>
                            <Typography sx={styles.testimonialItem__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <Typography sx={styles.testimonialItem__people}>- Customer Name -</Typography>
                        </Box>
                    </div>
                    <div className="keen-slider__slide">
                        <Box sx={styles.testimonialItem}>
                            <Typography sx={styles.bigComma}>&ldquo;</Typography>
                            <Typography sx={styles.testimonialItem__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <Typography sx={styles.testimonialItem__people}>- Customer Name -</Typography>
                        </Box>
                    </div>
                    <div className="keen-slider__slide">
                        <Box sx={styles.testimonialItem}>
                            <Typography sx={styles.bigComma}>&ldquo;</Typography>
                            <Typography sx={styles.testimonialItem__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <Typography sx={styles.testimonialItem__people}>- Customer Name -</Typography>
                        </Box>
                    </div>
                    <div className="keen-slider__slide">
                        <Box sx={styles.testimonialItem}>
                            <Typography sx={styles.bigComma}>&ldquo;</Typography>
                            <Typography sx={styles.testimonialItem__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <Typography sx={styles.testimonialItem__people}>- Customer Name -</Typography>
                        </Box>
                    </div>
                    <div className="keen-slider__slide">
                        <Box sx={styles.testimonialItem}>
                            <Typography sx={styles.bigComma}>&ldquo;</Typography>
                            <Typography sx={styles.testimonialItem__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <Typography sx={styles.testimonialItem__people}>- Customer Name -</Typography>
                        </Box>
                    </div>
                </div>
            </Box>
            <Box sx={styles.exampleWrapper}>
                <Grid container maxWidth="xl">
                    <Grid item xs={12} md={6} lg={3}>
                        <Image src={exampleOne} alt="example-1" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Image src={exampleTwo} alt="example-2" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Image src={exampleThree} alt="example-3" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Image src={exampleFour} alt="example-4" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonials;
