import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { getLoginInfo } from '@helpers/auth';
import theme from '../src/theme';
import './style/index.css';
import createEmotionCache from '../src/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const router = useRouter();
    let isLogin;

    if (router.asPath.includes('astro')) {
        isLogin = getLoginInfo();
    }

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} isLogin={isLogin} />
            </ThemeProvider>
        </CacheProvider>
    );
}
