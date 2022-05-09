/* eslint-disable import/extensions */
import * as React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';
import SimpleArticle from '../../components/pages/blog/slug';
import Footer from '../../components/footer';

import stripHtmlTags from '../../components/helpers/stripHtmlTags';

const Slug = () => {
    const router = useRouter();

    return (
        <>
            <Navbar />
            {stripHtmlTags(router.query.slug) === 'test' && <SimpleArticle />}
            <Footer />
        </>
    );
};

export const getStaticProps = async () => ({
    props: {}, // will be passed to the page component as props
});

export const getStaticPaths = async () => ({
    paths: [
        {
            params: {
                slug: 'test.html',
            },
        },
    ],
    fallback: 'blocking',
});

export default Slug;
