/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

import { useKeenSlider } from 'keen-slider/react';

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

    const link = 'https://api.webscraping.ai/html';
    const apiKey = '3b94f274-c505-4f1a-94d2-3194ac3c1a60';
    const userName = 'mantenstory.co';

    const [instagramData, setInstagramData] = React.useState();

    React.useEffect(() => {
        fetch(`${link}?api_key=${apiKey}&proxy=residential&url=https%3A%2F%2Fwww.instagram.com%2F${userName}%2F%3F__a%3D1&js=false`)
            .then((results) => results.json())
            .then((data) => {
                const filtered = data.graphql.user.edge_owner_to_timeline_media.edges.slice(0, 4);
                console.log(filtered);
                setInstagramData(filtered);
            });
    }, []);

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
            {instagramData && (
                <Box sx={styles.exampleWrapper}>
                    <Box sx={styles.titleWrapperInstagram}>
                        <Typography sx={styles.title}>Latest Instagram Post</Typography>
                    </Box>
                    <Grid container maxWidth="xl" spacing={2}>
                        {instagramData.map((item) => (
                            <Grid item xs={12} md={6} lg={3} sx={styles.igFeedWrapper}>
                                <Link href={`https://instagram.com/p/${item.node.shortcode}`} target="_blank" passHref>
                                    <Image
                                        src={item.node.thumbnail_resources[3].src.replace(/^[^.]*/, 'https://scontent-atl3-2')}
                                        alt={item.node.shortcode}
                                        width="480"
                                        height="480"
                                    />
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </Container>
    );
};

export default Testimonials;
