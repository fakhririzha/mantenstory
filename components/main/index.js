import * as React from 'react';
import Container from '@mui/material/Container';
import MainHeadline from './headline';
import Showcase from './showcase';

const Main = () => (
    <Container maxWidth="xl">
        <MainHeadline />
        <Showcase />
    </Container>
);

export default Main;
