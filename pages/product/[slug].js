/* eslint-disable import/extensions */
import * as React from 'react';
import Layout from '@components/Layout';
import SingleProduct from '@components/pages/product/slug';
import stripHtmlTags from '@components/helpers/stripHtmlTags';
import { useRouter } from 'next/router';
import Navbar from '@components/navbar';
import Footer from '@components/footer';

const Slug = () => {
    const router = useRouter();
    const [productData, setProductData] = React.useState(null);

    React.useEffect(() => {
        if (router.query.slug !== undefined) {
            fetch(`/api/astro/product/getSingleProductByUrlKey/${stripHtmlTags(router.query.slug)}`)
                .then((response) => response.json())
                .then((product) => {
                    setProductData(product);
                })
                .catch((err) => console.error('Error: ', err));
        }
    }, [router]);

    return (
        <Layout
            pageProps={{
                title: productData && productData.data ? productData.data[0].title : 'Product',
                description: 'Mantenstory products are designed to help you plan your wedding with ease.',
            }}
        >
            <Navbar />
            <SingleProduct />
            <Footer />
        </Layout>
    );
};

export default Slug;
