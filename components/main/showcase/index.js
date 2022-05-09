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
import Image from 'next/image';

import { alpha, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import showcaseOne from '../../../assets/img/showcase-1.png';
import showcaseTwo from '../../../assets/img/showcase-2.png';

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
    const styles = makeStyles();

    const matchesMobile = useMediaQuery('(min-width:0px) and (max-width:719px)');
    const matchesDesktop = useMediaQuery('(min-width:1200px)');

    return (
        <Box sx={styles.showcaseBox}>
            {matchesDesktop && (
                <>
                    <Box>
                        <Box sx={styles.showcaseOne}>
                            <Image src={showcaseOne} alt="logo" />
                        </Box>
                        <Box sx={styles.showcaseOneDescription}>
                            <Typography sx={styles.showcaseOneDescTitle}>Wedding Invitation Card</Typography>
                            <Typography sx={styles.showcaseOneDescContent}>
                                Browse the gallery and choose an invitation style that fits your theme. Each design is ready for your customisation
                                and comes with optional matching RSVP cards and information cards.
                            </Typography>
                            <Button sx={styles.actionButton} color="primaryCard" disableElevation>
                                See Catalogue
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={styles.showcaseTwoWrapper}>
                        <Box sx={styles.showcaseTwo}>
                            <Image src={showcaseTwo} alt="logo" />
                        </Box>
                        <Box sx={styles.showcaseTwoDescription}>
                            <Typography sx={styles.showcaseTwoDescTitle}>Wedding Souvenir</Typography>
                            <Typography sx={styles.showcaseTwoDescContent}>
                                Browse the gallery and choose an invitation style that fits your theme. Each design is ready for your customisation
                                and comes with optional matching RSVP cards and information cards.
                            </Typography>
                            <Button sx={styles.actionButton} color="primaryCard" disableElevation>
                                See Catalogue
                            </Button>
                        </Box>
                    </Box>
                </>
            )}
            {matchesMobile && (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardMedia component="img" height="140" image="/static/assets/img/showcase-1.png" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Wedding Invitation Card
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Browse the gallery and choose an invitation style that fits your theme. Each design is ready for your
                                    customisation and comes with optional matching RSVP cards and information cards.
                                </Typography>
                            </CardContent>
                            <CardActions sx={styles.cardActions}>
                                <Link href="/product" passHref>
                                    <Button variant="contained" size="small" color="primaryCard" sx={{ minWidth: '100%' }}>
                                        See Catalogue
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardMedia component="img" height="140" image="/static/assets/img/showcase-2.png" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Wedding Souvenir
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Browse the gallery and choose an invitation style that fits your theme. Each design is ready for your
                                    customisation and comes with optional matching RSVP cards and information cards.
                                </Typography>
                            </CardContent>
                            <CardActions sx={styles.cardActions}>
                                <Link href="/product" passHref>
                                    <Button variant="contained" size="small" color="primaryCard" sx={{ minWidth: '100%' }}>
                                        See Catalogue
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default Main;
