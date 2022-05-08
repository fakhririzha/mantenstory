import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import MuiButton from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Image from 'next/image';
import { useRouter } from 'next/router'

import { alpha, styled } from '@mui/material/styles';

import makeStyles from './styles';
import logo from '../../public/static/assets/img/logo.png';

const pages = ['Home', 'About Us', 'Product', 'Blog', 'FAQ\'s'];

const Button = styled((props) => (
    <MuiButton
        {...props}
    />
))(({ theme }) => ({
    ':hover': {
        backgroundColor: '#FFF',
        borderBottom: `2px solid ${alpha(theme.palette.secondary.main, 0.8)}`,
    },
    margin: '0rem 1rem',
}));

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const router = useRouter();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const styles = makeStyles();

    return (
        <AppBar sx={styles.appBar} position="static">
            <Container maxWidth="xl">
                <Toolbar sx={styles.toolBar} disableGutters>
                    <Box sx={styles.logoDesktop}>
                        <Link href="/" passHref>
                            <Image src={logo} alt="logo" />
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="primary"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem>
                                <Link href="/" passHref>
                                    <Typography textAlign="center">Home</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/about" passHref>
                                    <Typography textAlign="center">About</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/product" passHref>
                                    <Typography textAlign="center">Product</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/blog" passHref>
                                    <Typography textAlign="center">Blog</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/faq" passHref>
                                    <Typography textAlign="center">FAQ&apos;s</Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={styles.logoMobile}>
                        <Link href="/" passHref>
                            <Image src={logo} alt="logo" />
                        </Link>
                    </Box>
                    <Box sx={styles.menuNav}>
                        <Link href="/" passHref>
                            <Button onClick={handleCloseNavMenu} sx={router.pathname === '/' ? styles.menuNavBtnActive : styles.menuNavBtn}>
                                Home
                            </Button>
                        </Link>
                        <Link href="/about" passHref>
                            <Button onClick={handleCloseNavMenu} sx={router.pathname === '/about' ? styles.menuNavBtnActive : styles.menuNavBtn}>
                                About Us
                            </Button>
                        </Link>
                        <Link href="/product" passHref>
                            <Button onClick={handleCloseNavMenu} sx={router.pathname === '/product' ? styles.menuNavBtnActive : styles.menuNavBtn}>
                                Product
                            </Button>
                        </Link>
                        <Link href="/blog" passHref>
                            <Button onClick={handleCloseNavMenu} sx={router.pathname === '/blog' ? styles.menuNavBtnActive : styles.menuNavBtn}>
                                Blog
                            </Button>
                        </Link>
                        <Link href="/faq" passHref>
                            <Button onClick={handleCloseNavMenu} sx={router.pathname === '/faq' ? styles.menuNavBtnActive : styles.menuNavBtn}>
                                FAQ&apos;s
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
