/* eslint-disable import/extensions */
import * as React from 'react';
import Layout from '@components/Layout';
import Navbar from '@components/navbar';
import Main from '@components/pages/blog';
import Footer from '@components/footer';

const Blog = () => (
    <Layout
        pageProps={{
            title: 'Blog',
            description: 'Mantenstory.co blog',
        }}
    >
        <Navbar />
        <Main />
        <Footer />
    </Layout>
);

export default Blog;
