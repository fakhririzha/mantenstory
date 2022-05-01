/* eslint-disable import/extensions */
import * as React from 'react';
import Navbar from '../../components/navbar';
import Main from '../../components/pages/product';
import Footer from '../../components/footer';

import makeStyles from '../../components/pages/product/styles';

const Product = () => {
    const styles = makeStyles();

    return (
        <>
            <Navbar />
            <Main />
            <Footer style={styles.footer} />
        </>
    );
};

export default Product;
