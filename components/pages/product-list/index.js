/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Showcase from './showcase';

import makeStyles from './styles';

const Product = () => {
    const styles = makeStyles();

    const router = useRouter();
    const [categoryData, setCategoryData] = React.useState(null);

    React.useEffect(() => {
        if (router.query.slug !== undefined) {
            fetch(`/api/astro/category/getSingleCategoryBySlug/${router.query.slug}`)
                .then((response) => response.json())
                .then((product) => {
                    setCategoryData(product);
                    console.log(product);
                })
                .catch((err) => console.error('Error: ', err));
        }
    }, [router]);

    return (
        <Container maxWidth="xl" sx={styles.headerContainer}>
            <Box sx={styles.headerContent}>
                <Typography sx={styles.title}>{categoryData && categoryData.data && categoryData.data[0].category_name}</Typography>
                <Typography sx={styles.description}>
                    <div
                        dangerouslySetInnerHTML={{ __html: categoryData && categoryData.data && categoryData.data[0].category_detail_description }}
                    />
                </Typography>
            </Box>
            <Box>
                <Showcase />
            </Box>
        </Container>
    );
};

export default Product;
