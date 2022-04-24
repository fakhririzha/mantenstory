/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import showcaseOne from '../../../assets/img/showcase-1.png';
import showcaseTwo from '../../../assets/img/showcase-2.png';

import makeStyles from './styles';

const Main = () => {
    const styles = makeStyles();

    return (
        <Box sx={styles.showcaseBox}>
            <Box>
                <Box sx={styles.showcaseOne}>
                    <Image src={showcaseOne} alt="logo" />
                </Box>
                <Box sx={styles.showcaseOneDescription}>
                    <Typography sx={styles.showcaseOneDescTitle}>
                        Wedding Invitation Card
                    </Typography>
                    <Typography sx={styles.showcaseOneDescContent}>
                        Browse the gallery and choose an invitation style that fits your theme. Each design is ready for your customisation and comes with optional matching RSVP cards and information cards.
                    </Typography>
                    <Button variant="contained" sx={styles.actionButton} color="primaryCard">See Catalogue</Button>
                </Box>
            </Box>
            <Box sx={styles.showcaseTwoWrapper}>
                <Box sx={styles.showcaseTwo}>
                    <Image src={showcaseTwo} alt="logo" />
                </Box>
                <Box sx={styles.showcaseTwoDescription}>
                    <Typography sx={styles.showcaseTwoDescTitle}>
                        Wedding Souvenir
                    </Typography>
                    <Typography sx={styles.showcaseTwoDescContent}>
                        Browse the gallery and choose an invitation style that fits your theme. Each design is ready for your customisation and comes with optional matching RSVP cards and information cards.
                    </Typography>
                    <Button variant="contained" sx={styles.actionButton} color="primaryCard">See Catalogue</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Main;
