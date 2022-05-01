import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

import makeStyles from './styles';
import logoAlt from '../../public/static/assets/img/logo_alt.png';

const Footer = (style = '') => {
    const styles = makeStyles();

    const currentYear = new Date().getFullYear();

    return (
        <Container maxWidth="false" sx={style !== null ? style.style : styles.footer}>
            <Box sx={styles.footerContent}>
                <Box sx={styles.logoWrapper}>
                    <Image src={logoAlt} alt="logoAlt" />
                </Box>
                <Box sx={styles.socialMediaWrapper}>
                    <Box sx={styles.socialMedia__item}>
                        <Box sx={styles.socialMedia__itemWrapper}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Box>
                    </Box>
                    <Box sx={styles.socialMedia__item}>
                        <Box sx={styles.socialMedia__itemWrapper}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </Box>
                    </Box>
                    <Box sx={styles.socialMedia__item}>
                        <Box sx={styles.socialMedia__itemWrapper}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </Box>
                    </Box>
                    <Box sx={styles.socialMedia__item}>
                        <Box sx={styles.socialMedia__itemWrapper}>
                            <FontAwesomeIcon icon={faTiktok} />
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.footerText}>
                    <Typography sx={styles.footerTextContent}>
                        &copy; 2012-
                        {currentYear}
                        . Manten Story. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};
export default Footer;
