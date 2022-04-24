import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MainHeadline from './headline'

import makeStyles from './styles';

const Main = () => {
    const styles = makeStyles();

    return (
        <Container maxWidth="xl">
            <MainHeadline />
        </Container>
    );
};

export default Main;