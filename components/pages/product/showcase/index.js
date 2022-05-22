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
import Typography from '@mui/material/Typography';

import Fade from 'react-reveal/Fade';

import useMediaQuery from '@mui/material/useMediaQuery';

import makeStyles from './styles';

const Main = () => {
    const styles = makeStyles();

    const [productData, setProductData] = React.useState(null);

    const matchMobile = useMediaQuery('(min-width:0px) and (max-width:719px)');
    const matchDesktop = useMediaQuery('(min-width:1200px)');

    React.useEffect(() => {
        fetch('/api/astro/product')
            .then((data) => data.json())
            .then((results) => {
                setProductData(results);
                console.log(results);
            })
            .catch((err) => console.error('Error: ', err));
    }, []);

    return (
        <Box sx={styles.productBox}>
            {matchDesktop && (
                <>
                    {productData &&
                        productData.data &&
                        productData.data.map((product) => {
                            if (product.id === 1) {
                                return (
                                    <Fade right>
                                        <Box sx={styles.productOneWrapper}>
                                            <Box sx={styles.productOne}>
                                                <img src={product.image_base64} alt={product.title} />
                                            </Box>
                                            <Box sx={styles.productOneDescription}>
                                                <Typography sx={styles.productOneDescTitle}>{product.title}</Typography>
                                                <div
                                                    style={styles.productOneDescContent}
                                                    dangerouslySetInnerHTML={{ __html: product.short_description }}
                                                />
                                                <Link href={`/product/${product.url_key}.html`} passHref>
                                                    <Button variant="contained" sx={styles.actionButton} color="primaryCard">
                                                        See Catalogue
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Fade>
                                );
                            }
                            if (product.id % 2 === 0 && product.id > 1) {
                                return (
                                    <Fade left>
                                        <Box sx={styles.productTwoWrapper}>
                                            <Box sx={styles.productTwo}>
                                                <img src={product.image_base64} alt={product.title} />
                                            </Box>
                                            <Box sx={styles.productTwoDescription}>
                                                <Typography sx={styles.productTwoDescTitle}>{product.title}</Typography>
                                                <div
                                                    style={styles.productTwoDescContent}
                                                    dangerouslySetInnerHTML={{ __html: product.short_description }}
                                                />
                                                <Link href={`/product/${product.url_key}.html`} passHref>
                                                    <Button variant="contained" sx={styles.actionButton} color="primaryCard">
                                                        See Catalogue
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Fade>
                                );
                            }
                            if (product.id % 2 === 1 && product.id > 1) {
                                return (
                                    <Fade right>
                                        <Box sx={styles.productThreeWrapper}>
                                            <Box sx={styles.productThree}>
                                                <img src={product.image_base64} alt={product.title} />
                                            </Box>
                                            <Box sx={styles.productThreeDescription}>
                                                <Typography sx={styles.productThreeDescTitle}>{product.title}</Typography>
                                                <div
                                                    style={styles.productThreeDescContent}
                                                    dangerouslySetInnerHTML={{ __html: product.short_description }}
                                                />
                                                <Link href={`/product/${product.url_key}.html`} passHref>
                                                    <Button variant="contained" sx={styles.actionButton} color="primaryCard">
                                                        See Catalogue
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Fade>
                                );
                            }
                        })}
                </>
            )}
            {matchMobile && (
                <Grid container spacing={3}>
                    {productData &&
                        productData.data &&
                        productData.data.map((product) => (
                            <Grid item xs={12}>
                                <Card>
                                    <CardMedia component="img" height="140" image="/static/assets/img/product-1.png" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.title}
                                        </Typography>
                                        <div style={styles.mobileDescription} dangerouslySetInnerHTML={{ __html: product.short_description }} />
                                    </CardContent>
                                    <CardActions sx={styles.cardActions}>
                                        <Link href={`/product/${product.url_key}.html`} passHref>
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
