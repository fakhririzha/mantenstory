/* eslint-disable max-len */
/* eslint-disable import/extensions */
import * as React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Main from '../components/main';
import HowToOrder from '../components/howtoorder';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';

const Index = ({ feed }) => (
    <Layout
        pageProps={{
            title: 'Mantenstory.co',
            description: 'Mantenstory.co is a leading provider of quality, affordable, and reliable wedding planning services.',
        }}
    >
        <Navbar />
        <Header />
        <Main />
        <HowToOrder />
        <Testimonials feed={feed} />
        <Footer />
    </Layout>
);

export const getServerSideProps = async () => {
    // const long_url =
    //     'https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=520ba016ce53dabe64ca6dc8a9fe494c&access_token=IGQVJXS0htS0xUZAkhXc3ZApVEYtNWY3Sk1aamQ2LWN4aktOdWVhNm8tSE53YWswcUFuYWd3QTdyd0NyMHI5aHZAsN3NjM0x4T2lhck5nMF9mWVpHTk05blBLbEsyYktVenFRSlVkTUJUNTN6TlRYaHc0UwZDZD';
    // const long_data = await fetch(long_url);
    // const long_token = await long_data.json();

    const url =
        'https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,thumbnail_url&access_token=IGQVJVZAmUzSjYyUUhPMTFhRXZAxUzJUSERpbVVVdk1JalBQSDNVd19xSjJ1Q0lMZAmhQQ2F2ZAFg5d21HOHd4ZAWRPekY3M081bHJvM1c2ODlIa2p3cHY2ZATh3TTVoRWg0WDhidEltbzdEdW5wX2pxYUl1egZDZD';
    const data = await fetch(url);
    const feed = await data.json();

    // console.log(long_token);
    console.log(feed);

    return {
        props: {
            feed,
            // long_token,
        },
    };
};

export default Index;
