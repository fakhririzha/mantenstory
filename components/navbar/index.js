import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';

import makeStyles from './styles';
import logo from '../../public/static/assets/img/logo.png';

const pages = ['Home', 'About Us', 'Product', 'Blog', 'FAQ\'s'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

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
                        <Image src={logo} alt="logo" />
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={styles.logoMobile}>
                        <Image src={logo} alt="logo" />
                    </Box>
                    <Box sx={styles.menuNav}>
                        <Link href="/" passHref>
                            <Button onClick={handleCloseNavMenu} sx={styles.menuNavBtn}>
                                Home
                            </Button>
                        </Link>
                        <Link href="/about" passHref>
                            <Button onClick={handleCloseNavMenu} sx={styles.menuNavBtn}>
                                About Us
                            </Button>
                        </Link>
                        <Link href="/product" passHref>
                            <Button onClick={handleCloseNavMenu} sx={styles.menuNavBtn}>
                                Product
                            </Button>
                        </Link>
                        <Link href="/blog" passHref>
                            <Button onClick={handleCloseNavMenu} sx={styles.menuNavBtn}>
                                Blog
                            </Button>
                        </Link>
                        <Button onClick={handleCloseNavMenu} sx={styles.menuNavBtn}>
                            FAQ&apos;s
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
