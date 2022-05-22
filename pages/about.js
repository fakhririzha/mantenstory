/* eslint-disable import/extensions */
import * as React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/navbar';
import Main from '../components/pages/about/header';
import Footer from '../components/footer';

const About = () => (
    <Layout
        pageProps={{
            title: 'About Us',
            description: 'Mantenstory.co is a leading provider of quality, affordable, and reliable wedding planning services.',
        }}
    >
        <Navbar />
        <Main />
        <Footer />
    </Layout>
);

export default About;
