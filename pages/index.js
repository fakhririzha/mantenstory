/* eslint-disable import/extensions */
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from './components/navbar';
import Header from './components/header';
import Main from './components/main';

const Index = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Main />
        </>
    );
};

export default Index;
