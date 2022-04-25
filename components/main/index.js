import * as React from 'react';
import Container from '@mui/material/Container';
import MainHeadline from './headline';
import Showcase from './showcase';
import WhyChooseUs from './whychooseus';

const Main = () => (
    <Container maxWidth="xl">
        <MainHeadline />
        <Showcase />
        <WhyChooseUs />
    </Container>
);

export default Main;
