/* eslint-disable import/extensions */
import * as React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Main from '../components/main';
import HowToOrder from '../components/howtoorder';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';

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
        <Footer />
    </Layout>
);

export default Index;
