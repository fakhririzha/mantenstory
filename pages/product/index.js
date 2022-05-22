/* eslint-disable import/extensions */
import * as React from 'react';
import Layout from '../../components/Layout';
import Navbar from '../../components/navbar';
import Main from '../../components/pages/product';
import Footer from '../../components/footer';

import makeStyles from '../../components/pages/product/styles';

const Product = () => {
    const styles = makeStyles();

    return (
        <Layout
            pageProps={{
                title: 'Our Products',
                description: 'Mantenstory products are designed to help you plan your wedding with ease.',
            }}
        >
            <Navbar />
            <Main />
            <Footer style={styles.footer} />
        </Layout>
    );
};

export default Product;
