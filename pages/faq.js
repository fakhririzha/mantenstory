/* eslint-disable import/extensions */
import * as React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/navbar';
import Main from '../components/pages/faq';
import Footer from '../components/footer';

const Faq = () => (
    <Layout
        pageProps={{
            title: 'Frequently Asked Questions',
            description: 'Frequently asked questions about Mantenstory.co services',
        }}
    >
        <Navbar />
        <Main />
        <Footer />
    </Layout>
);

export default Faq;
