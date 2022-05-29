/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';

import makeStyles from './styles';

const Divider = () => {
    const styles = makeStyles();

    return <Box sx={styles.divider} />;
};

const Header = () => {
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
    const styles = makeStyles();

    return (
        <Container maxWidth="xl" sx={styles.headerContainer}>
            {blogData &&
                blogData.data &&
                blogData.data.map((blog) => (
                    <Grid container spacing={3} sx={styles.headerGrid}>
                        <Grid item xs={12}>
                            <Box sx={styles.blogImage}>
                                <img src={blog.image_base64} alt={blog.url_key} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={styles.headerContent}>
                                <Typography sx={styles.title}>{blog.title}</Typography>
                                <Divider />
                                <Typography variant="caption">Posted at {blog.timestamp}</Typography>
                                <Typography sx={styles.description}>
                                    <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
        </Container>
    );
};

export default Header;
