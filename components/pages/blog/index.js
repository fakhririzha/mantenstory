/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CardActions, CardActionArea } from '@mui/material';

import makeStyles from './styles';

const Product = () => {
    const [blogData, setBlogData] = React.useState(null);

    const styles = makeStyles();

    React.useEffect(() => {
        fetch('/api/astro/blog/desc')
            .then((data) => data.json())
            .then((results) => {
                setBlogData(results);
            })
            .catch((err) => console.error('Error: ', err));
    }, []);

    return (
        <Container maxWidth="xl" sx={styles.blogContainer}>
            <Box sx={{ paddingTop: '5rem' }}>
                <Grid container spacing={3}>
                    {blogData &&
                        blogData.data &&
                        blogData.data.map((blog) => (
                            <Link href={`/blog/${blog.url_key}`} passHref>
                                <Grid item xs={12} sm={6} md={4} sx={styles.blogGrid}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia component="img" height="320" src={blog.image_base64} alt={blog.url_key} />
                                            <CardContent sx={{ borderBottom: '2px solid #EFEFEF' }}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {blog.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <div dangerouslySetInnerHTML={{ __html: blog.description.substr(0, 100) }} />
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Typography variant="caption">Posted at {blog.timestamp}</Typography>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Link>
                        ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Product;
