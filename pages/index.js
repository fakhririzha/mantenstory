/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import * as React from 'react';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Layout from '@components/Layout';
import Navbar from '@components/navbar';
import Header from '@components/header';
import Main from '@components/main';
import HowToOrder from '@components/howtoorder';
import Testimonials from '@components/testimonials';
import Footer from '@components/footer';

const Index = () => (
    <Layout
        pageProps={{
            title: 'Mantenstory.co',
            description: 'Mantenstory.co is a leading provider of quality, affordable, and reliable wedding planning services.',
        }}
    >
        <Navbar />
        <Header />
        <Main />
        <HowToOrder />
        <Testimonials />
        <Fab
            href="https://wa.link/4nh9ic"
            color="primary"
            aria-label="add"
            sx={{
                margin: 0,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
                position: 'fixed',
            }}
        >
            <WhatsAppIcon />
        </Fab>
        <Footer />
    </Layout>
);

export default Index;
