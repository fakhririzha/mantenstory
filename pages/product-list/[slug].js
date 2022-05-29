/* eslint-disable import/extensions */
import * as React from 'react';
import Layout from '@components/Layout';
import Main from '@components/pages/product-list';
import { useRouter } from 'next/router';
import { baseUrl } from '@config';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Slug = () => {
    const router = useRouter();
    const [categoryData, setCategoryData] = React.useState(null);

    React.useEffect(() => {
        if (router.query.slug !== undefined) {
            fetch(`${baseUrl}/api/astro/category/getSingleCategoryBySlug/${router.query.slug}`)
                .then((response) => response.json())
                .then((product) => {
                    setCategoryData(product);
                })
                .catch((err) => console.error('Error: ', err));
        }
    }, [router]);

    return (
        <Layout
            pageProps={{
                title: categoryData && categoryData.data ? categoryData.data[0].category_name : 'Product Category',
                description: 'Mantenstory products are designed to help you plan your wedding with ease.',
            }}
        >
            <Navbar />
            <Main />
            <Footer />
        </Layout>
    );
};

export default Slug;
