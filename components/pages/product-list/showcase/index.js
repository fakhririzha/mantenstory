/* eslint-disable operator-linebreak */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { baseUrl } from '@config';
import Typography from '@mui/material/Typography';

import Fade from 'react-reveal/Fade';

import useMediaQuery from '@mui/material/useMediaQuery';

import makeStyles from './styles';

const Main = () => {
    const styles = makeStyles();

    const router = useRouter();

    const [categoryData, setCategoryData] = React.useState(null);

    const matchMobile = useMediaQuery('(min-width:0px) and (max-width:719px)');
    const matchDesktop = useMediaQuery('(min-width:1200px)');

    React.useEffect(() => {
        if (router.query.slug !== undefined) {
            fetch(`${baseUrl}/api/astro/category/getSingleCategoryBySlug/${router.query.slug}`)
                .then((response) => response.json())
                .then((product) => {
                    setCategoryData(product);
                    console.log(product);
                })
                .catch((err) => console.error('Error: ', err));
        }
    }, [router]);

    return (
        <Box sx={styles.productBox}>
            {matchDesktop && (
                <>
                    {categoryData &&
                        categoryData.data &&
                        categoryData.data.map((item, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <Fade right key={index}>
                                        <Box sx={styles.showcaseOneWrapper}>
                                            <Box sx={styles.showcaseOne}>
                                                <img src={item.image_base64} alt={item.name} style={styles.showcaseImage} />
                                            </Box>
                                            <Box sx={styles.showcaseOneDescription}>
                                                <Typography sx={styles.showcaseOneDescTitle}>{item.title}</Typography>
                                                <Typography sx={styles.showcaseOneDescContent}>
                                                    <div dangerouslySetInnerHTML={{ __html: item.product_short_description }} />
                                                </Typography>
                                                <Link href={`/product/${item.product_url_key}.html`} passHref>
                                                    <Button sx={styles.actionButton} color="primaryCard" disableElevation>
                                                        See Catalogue
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Fade>
                                );
                            }
                            return (
                                <Fade left key={index}>
                                    <Box sx={styles.showcaseTwoWrapper}>
                                        <Box sx={styles.showcaseTwo}>
                                            <img src={item.image_base64} alt={item.name} style={styles.showcaseImage} />
                                        </Box>
                                        <Box sx={styles.showcaseTwoDescription}>
                                            <Typography sx={styles.showcaseTwoDescTitle}>{item.title}</Typography>
                                            <Typography sx={styles.showcaseTwoDescContent}>
                                                <div dangerouslySetInnerHTML={{ __html: item.product_short_description }} />
                                            </Typography>
                                            <Link href={`/product/${item.product_url_key}.html`} passHref>
                                                <Button sx={styles.actionButton} color="primaryCard" disableElevation>
                                                    See Catalogue
                                                </Button>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Fade>
                            );
                        })}
                </>
            )}
            {matchMobile && (
                <Grid container spacing={3}>
                    {categoryData &&
                        categoryData.data &&
                        categoryData.data.map((item) => (
                            <Grid item xs={12}>
                                <Card>
                                    <CardMedia component="img" height="140" src={item.image_base64} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <div style={styles.mobileDescription} dangerouslySetInnerHTML={{ __html: item.product_short_description }} />
                                    </CardContent>
                                    <CardActions sx={styles.cardActions}>
                                        <Link href={`/product/${item.product_url_key}.html`} passHref>
                                            <Button variant="contained" size="small" color="primaryCard" sx={{ minWidth: '100%' }}>
                                                See Catalogue
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            )}
        </Box>
    );
};

export default Main;
