/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { baseUrl } from '@config';

import makeStyles from './styles';

const Divider = () => {
    const styles = makeStyles();

    return <Box sx={styles.divider} />;
};

const Header = () => {
    const [aboutData, setAboutData] = React.useState(null);

    React.useEffect(() => {
        fetch(`${baseUrl}/api/astro/about`)
            .then((response) => response.json())
            .then((about) => {
                setAboutData(about);
            })
            .catch((err) => console.error('Error: ', err));
    }, []);

    const styles = makeStyles();

    return (
        <Container maxWidth="xl" sx={styles.headerContainer}>
            <Grid container spacing={3} sx={styles.headerGrid}>
                {aboutData && aboutData.data && (
                    <>
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <img src={aboutData.data[0].image_base64} alt="About Header" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={styles.headerContent}>
                                <Typography sx={styles.title}>About Us</Typography>
                                <Typography sx={styles.description}>
                                    <div dangerouslySetInnerHTML={{ __html: aboutData.data[0].description }} />
                                </Typography>
                            </Box>
                        </Grid>
                    </>
                )}
            </Grid>
            <Divider />
            <Box>
                <Typography sx={styles.titleLocation}>Our Location</Typography>
                <Typography sx={styles.descriptionLocation}>
                    Jl. Lotus Tim. No.25, RT.004/RW.019, Jaka Setia, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17147
                </Typography>
            </Box>
            <Box>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9380275968256!2d106.96860581540282!3d-6.2718800954604195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d37d83cb85d%3A0x6d45b20fabf9ef1!2sManten%20story%20bekasi!5e0!3m2!1sen!2sid!4v1651360129308!5m2!1sen!2sid"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="map"
                    style={styles.googleMap}
                />
            </Box>
        </Container>
    );
};

export default Header;
