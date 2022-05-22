/* eslint-disable import/extensions */
import * as React from 'react';
import Layout from '@components/Layout';
import SingleProduct from '@components/pages/product/slug';
import { baseUrl } from '@config';
import stripHtmlTags from '@components/helpers/stripHtmlTags';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Slug = (props) => {
    const { title: dataTitle } = props;

    return (
        <Layout
            pageProps={{
                title: dataTitle,
                description: 'Mantenstory products are designed to help you plan your wedding with ease.',
            }}
        >
            <Navbar />
            <SingleProduct />
            <Footer />
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch(`${baseUrl}/api/astro/product/`);
    const posts = await res.json();

    const paths = posts.data.map((post) => ({
        params: { slug: `${post.url_key}.html` },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`${baseUrl}/api/astro/product/getSingleProductByUrlKey/${stripHtmlTags(params.slug)}`);
    const product = await res.json();

    return {
        props: {
            title: product.data[0].title,
        },
    };
};

export default Slug;
