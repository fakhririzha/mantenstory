/* eslint-disable import/extensions */
import * as React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';
import SilverProduct from '../../components/pages/product/slug/silver';
import GoldProduct from '../../components/pages/product/slug/gold';
import PlatinumProduct from '../../components/pages/product/slug/platinum';
import Footer from '../../components/footer';

import stripHtmlTags from '../../components/helpers/stripHtmlTags';

const Slug = () => {
    const router = useRouter();

    return (
        <>
            <Navbar />
            {stripHtmlTags(router.query.slug) === 'silver' && <SilverProduct />}
            {stripHtmlTags(router.query.slug) === 'gold' && <GoldProduct />}
            {stripHtmlTags(router.query.slug) === 'platinum' && <PlatinumProduct />}
            <Footer />
        </>
    );
};

export const getStaticProps = async () => ({
    props: {},
});

export const getStaticPaths = async () => ({
    paths: [
        {
            params: {
                slug: 'silver.html',
            },
        },
        {
            params: {
                slug: 'gold.html',
            },
        },
        {
            params: {
                slug: 'platinum.html',
            },
        },
    ],
    fallback: 'blocking',
});

export default Slug;
