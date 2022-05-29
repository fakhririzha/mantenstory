/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

import makeStyles from './styles';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [reviewsData, setReviewsData] = React.useState({});
    const [loaded, setLoaded] = React.useState(false);

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
            spacing: 16,
        },
    });

    const [refInstagram, instagramRef] = useKeenSlider(
        {
            loop: true,
            breakpoints: {
                '(max-width:719px)': {
                    slides: { perView: 1 },
                },
            },
            slides: {
                perView: 4,
            },
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created() {
                setLoaded(true);
            },
            renderMode: 'performance',
        },
        [
            (slider) => {
                let timeout;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 4000);
                }
                slider.on('created', () => {
                    slider.container.addEventListener('mouseover', () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener('mouseout', () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on('dragStarted', clearNextTimeout);
                slider.on('animationEnded', nextTimeout);
                slider.on('updated', nextTimeout);
            },
        ]
    );

    const [instagramData, setInstagramData] = React.useState();

    React.useEffect(() => {
        fetch(
            'https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,thumbnail_url&access_token=IGQVJVRzVfOW5NcDRERFhPS0VUeUQwaWkyamxzVl8zajBjd0xBVGhEaWdhTU5fMzZAGUjRlVGg2WGJweEQwcWVZATTJoT043OE1hemRyNzJBWFFicjBPRmljaElEY0hySTdyaFc4VnRoWmYzMGdiMXZAacAZDZD'
        )
            .then((response) => response.json())
            .then((feed) => {
                console.log(feed);
                setInstagramData(feed.data);
            });
    }, []);

    React.useEffect(() => {
        fetch('/api/astro/reviews/accepted')
            .then((data) => data.json())
            .then((results) => {
                setReviewsData(results);
            })
            .catch((err) => console.error('Error: ', err));
    }, []);

    return (
        <Container maxWidth="xl" sx={styles.testimonialWrapper}>
            <Box sx={styles.titleWrapper}>
                <Typography sx={styles.title}>What They Said ?</Typography>
            </Box>
            <Box sx={styles.contentWrapper}>
                {reviewsData && reviewsData.data && (
                    <div ref={refCallback} className="keen-slider">
                        {reviewsData.data.map((review, index) => (
                            <div className="keen-slider__slide" key={index}>
                                <Box sx={styles.testimonialItem}>
                                    <Typography sx={styles.bigComma}>&ldquo;</Typography>
                                    <Typography sx={styles.testimonialItem__text}>{review.caption}</Typography>
                                    <Typography sx={styles.testimonialItem__people}>- {review.customer_name} -</Typography>
                                </Box>
                            </div>
                        ))}
                    </div>
                )}
                <Box sx={{ textAlign: 'center', marginTop: '2.5rem  ' }}>
                    <Link href="/submit-review" passHref>
                        <Button variant="contained">Submit Review</Button>
                    </Link>
                </Box>
            </Box>
            {instagramData && (
                <Box sx={styles.exampleWrapper}>
                    <Box sx={styles.titleWrapperInstagram}>
                        <Typography sx={styles.title}>Latest Instagram Post</Typography>
                    </Box>
                    <Box sx={styles.contentWrapper}>
                        <div ref={refInstagram} className="keen-slider">
                            {instagramData.map((item, index) => (
                                <div className="keen-slider__slide" key={index}>
                                    <Link href={item.permalink} target="_blank" passHref>
                                        <Image
                                            src={item.media_url.replace(/^[^.]*/, 'https://scontent-atl3-2')}
                                            alt="Instagram_Post"
                                            width="320"
                                            height="320"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Box>
                    {loaded && instagramRef.current && instagramRef.current.track && instagramRef.current.track.details && (
                        <div className="dots">
                            {[...Array(instagramRef.current.track.details.slides.length - 1).keys()].map((idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        // eslint-disable-next-line no-unused-expressions
                                        instagramRef.current?.moveToIdx(idx);
                                    }}
                                    type="button"
                                    // eslint-disable-next-line no-undef
                                    className={`dot${currentSlide === idx ? ' active' : ''}`}
                                />
                            ))}
                        </div>
                    )}
                    <style jsx>
                        {`
                            .dots {
                                display: flex;
                                padding: 10px 0;
                                justify-content: center;
                            }

                            .dot {
                                border: none;
                                width: 10px;
                                height: 10px;
                                background: #c5c5c5;
                                border-radius: 50%;
                                margin: 0 5px;
                                padding: 5px;
                                cursor: pointer;
                            }

                            .dot:focus {
                                outline: none;
                            }

                            .dot.active {
                                background: #000;
                            }
                        `}
                    </style>
                </Box>
            )}
        </Container>
    );
};

export default Testimonials;
