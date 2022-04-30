/* eslint-disable import/extensions */
import * as React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Main from '../components/main';
import HowToOrder from '../components/howtoorder';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';

const Index = () => (
    <>
        <Navbar />
        <Header />
        <Main />
        <HowToOrder />
        <Testimonials />
        <Footer />
    </>
);

export default Index;
