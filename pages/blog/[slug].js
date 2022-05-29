/* eslint-disable import/extensions */
import * as React from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/Layout';
import Navbar from '@components/navbar';
import SingleBlog from '@components/pages/blog/slug';
import Footer from '@components/footer';

const Slug = () => {
    const router = useRouter();
    const [blogData, setBlogData] = React.useState(null);

    React.useEffect(() => {
        if (router.query.slug !== undefined) {
            fetch(`/api/astro/blog/getSingleBlogByUrlKey/${router.query.slug}`)
                .then((response) => response.json())
                .then((blog) => {
                    setBlogData(blog);
                })
                .catch((err) => console.error('Error: ', err));
        }
    }, [router]);

    return (
        <Layout
            pageProps={{
                title: blogData && blogData.data ? blogData.data[0].title : 'Blog',
                description: blogData && blogData.data ? blogData.data[0].description.substr(0, 50) : 'Mantenstory.co blog',
            }}
        >
            <Navbar />
            <SingleBlog />
            <Footer />
        </Layout>
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
