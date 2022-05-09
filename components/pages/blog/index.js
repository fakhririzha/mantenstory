/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import useMediaQuery from '@mui/material/useMediaQuery';

import blogFour from '../../../assets/img/blog-4.png';
import blogFive from '../../../assets/img/blog-5.png';
import blogEight from '../../../assets/img/blog-8.png';
import blogNine from '../../../assets/img/blog-9.png';

import makeStyles from './styles';

const Divider = () => {
    const styles = makeStyles();

    return <Box sx={styles.divider} />;
};

const Product = () => {
    const styles = makeStyles();

    const matchesDesktop = useMediaQuery('(min-width:1200px)');

    return (
        <Container maxWidth="xl" sx={styles.blogContainer}>
            {matchesDesktop && (
                <Box sx={styles.headlineWrapper}>
                    <Link href="/blog/test.html" passHref>
                        <Box sx={styles.leftHeadline}>
                            <Box sx={styles.leftHeadlineWrapper}>
                                <Typography sx={styles.leftHeadlineTitle}>Title</Typography>
                                <Divider />
                                <Typography sx={styles.leftHeadlineDescription}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry&apos;s standard dummy text ever since
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                    <Box sx={styles.rightHeadline}>
                        <Link href="/blog/test.html" passHref>
                            <Box sx={styles.rightHeadlineChildTwo}>
                                <Box sx={styles.rightHeadlineWrapper}>
                                    <Typography sx={styles.leftHeadlineTitle}>Title</Typography>
                                    <Divider />
                                    <Typography sx={styles.rightHeadlineDescription}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry&apos;s standard dummy text ever since
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                        <Link href="/blog/test.html" passHref>
                            <Box sx={styles.rightHeadlineChildThree}>
                                <Box sx={styles.rightHeadlineWrapper}>
                                    <Typography sx={styles.leftHeadlineTitle}>Title</Typography>
                                    <Divider />
                                    <Typography sx={styles.rightHeadlineDescription}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry&apos;s standard dummy text ever since
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Box>
                </Box>
            )}
            <Box sx={{ paddingTop: '5rem' }}>
                <Grid container spacing={3}>
                    <Link href="/blog/test.html" passHref>
                        <Grid item xs={12} sm={6} md={4} sx={styles.blogGrid}>
                            <Image src={blogFour} alt="Blog Four" />
                            <Box>
                                <Typography sx={styles.miniBlogTitle}>Title</Typography>
                                <Divider />
                                <Typography sx={styles.miniBlogDescription}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry&apos;s standard dummy text ever since
                                </Typography>
                            </Box>
                        </Grid>
                    </Link>
                    <Link href="/blog/test.html" passHref>
                        <Grid item xs={12} sm={6} md={4} sx={styles.blogGrid}>
                            <Image src={blogFive} alt="Blog Five" />
                            <Box>
                                <Typography sx={styles.miniBlogTitle}>Title</Typography>
                                <Divider />
                                <Typography sx={styles.miniBlogDescription}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry&apos;s standard dummy text ever since
                                </Typography>
                            </Box>
                        </Grid>
                    </Link>
                    <Link href="/blog/test.html" passHref>
                        <Grid item xs={12} sm={6} md={4} sx={styles.blogGrid}>
                            <Image src={blogNine} alt="Blog Six" />
                            <Box>
                                <Typography sx={styles.miniBlogTitle}>Title</Typography>
                                <Divider />
                                <Typography sx={styles.miniBlogDescription}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry&apos;s standard dummy text ever since
                                </Typography>
                            </Box>
                        </Grid>
                    </Link>
                </Grid>
            </Box>
            <Box sx={{ paddingTop: '5rem' }}>
                <Grid container spacing={3}>
                    <Link href="/blog/test.html" passHref>
                        <Grid item xs={12} sm={6} md={4} sx={styles.blogGrid}>
                            <Image src={blogFour} alt="Blog Seven" />
                            <Box>
                                <Typography sx={styles.miniBlogTitle}>Title</Typography>
                                <Divider />
                                <Typography sx={styles.miniBlogDescription}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry&apos;s standard dummy text ever since
                                </Typography>
                            </Box>
                        </Grid>
                    </Link>
                    <Link href="/blog/test.html" passHref>
                        <Grid item xs={12} sm={6} md={4} sx={styles.blogGrid}>
                            <Image src={blogEight} alt="Blog Eight" />
                            <Box>
                                <Typography sx={styles.miniBlogTitle}>Title</Typography>
                                <Divider />
                                <Typography sx={styles.miniBlogDescription}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry&apos;s standard dummy text ever since
                                </Typography>
                            </Box>
                        </Grid>
                    </Link>
                    <Link href="/blog/test.html" passHref>
                        <Grid item xs={12} sm={6} md={4} sx={styles.blogGrid}>
                            <Image src={blogNine} alt="Blog Nine" />
                            <Box>
                                <Typography sx={styles.miniBlogTitle}>Title</Typography>
                                <Divider />
                                <Typography sx={styles.miniBlogDescription}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry&apos;s standard dummy text ever since
                                </Typography>
                            </Box>
                        </Grid>
                    </Link>
                </Grid>
            </Box>
        </Container>
    );
};

export default Product;
