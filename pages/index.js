/* eslint-disable import/extensions */
import * as React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Main from '../components/main';
import HowToOrder from '../components/howtoorder';
import Testimonials from '../components/testimonials';

const Index = () => (
    <>
        <Navbar />
        <Header />
        <Main />
        <HowToOrder />
        <Testimonials />
    </>
);

export default Index;
