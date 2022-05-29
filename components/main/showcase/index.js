/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MuiButton from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import 'animate.css';
import Fade from 'react-reveal/Fade';

import { alpha, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import makeStyles from './styles';

const Button = styled((props) => <MuiButton {...props} />)(({ theme }) => ({
    ':hover': {
        backgroundColor: theme.palette.primaryCard.main,
        borderBottom: `2px solid ${alpha(theme.palette.secondary.main, 0.8)}`,
    },
    borderBottom: '2px solid transparent',
    transition: 'border-bottom .35s',
}));

const Main = () => {
    const [categoryData, setCategoryData] = React.useState(null);
    const styles = makeStyles();

    const matchesMobile = useMediaQuery('(min-width:0px) and (max-width:719px)');
    const matchesDesktop = useMediaQuery('(min-width:1200px)');

    React.useEffect(() => {
        fetch('/api/astro/category')
            .then((data) => data.json())
            .then((results) => {
                setCategoryData(results);
            })
            .catch((err) => console.error('Error: ', err));
    }, []);

    return (
        <Box sx={styles.showcaseBox}>
            {matchesDesktop &&
                categoryData &&
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
                                        <Typography sx={styles.showcaseOneDescTitle}>{item.name}</Typography>
                                        <Typography sx={styles.showcaseOneDescContent}>
                                            <div dangerouslySetInnerHTML={{ __html: item.short_description }} />
                                        </Typography>
                                        <Link href={`/product-list/${item.url_key}`} passHref>
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
                                    <Typography sx={styles.showcaseTwoDescTitle}>{item.name}</Typography>
                                    <Typography sx={styles.showcaseTwoDescContent}>
                                        <div dangerouslySetInnerHTML={{ __html: item.short_description }} />
                                    </Typography>
                                    <Link href={`/product-list/${item.url_key}`} passHref>
                                        <Button sx={styles.actionButton} color="primaryCard" disableElevation>
                                            See Catalogue
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Fade>
                    );
                })}
            {matchesMobile && (
                <Grid container spacing={3}>
                    {categoryData &&
                        categoryData.data &&
                        categoryData.data.map((item) => (
                            <Grid item xs={12}>
                                <Card>
                                    <CardMedia component="img" height="140" src={item.image_base64} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.short_description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={styles.cardActions}>
                                        <Link href={`/product-list/${item.url_key}`} passHref>
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
