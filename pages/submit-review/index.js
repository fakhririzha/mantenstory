/* eslint-disable import/extensions */
import * as React from 'react';
import Layout from '@components/Layout';
import Navbar from '@components/navbar';
import Main from '@components/pages/submit-review';
import Footer from '@components/footer';

const Slug = () => (
    <Layout
        pageProps={{
            title: 'Submit Review',
            description: 'Submit Review on Mantenstory.co',
        }}
    >
        <Navbar />
        <Main />
        <Footer />
    </Layout>
);

export default Slug;
