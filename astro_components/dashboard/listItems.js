import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InfoIcon from '@mui/icons-material/Info';
import PhotoIcon from '@mui/icons-material/Photo';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Link from 'next/link';

export const homeListItems = (
    <Link href="/astro" passHref>
        <ListItemButton>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItemButton>
    </Link>
);

export const mainListItems = (
    <>
        <Link href="/astro/category" passHref>
            <ListItemButton>
                <ListItemIcon>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Categories" />
            </ListItemButton>
        </Link>
        <Link href="/astro/product" passHref>
            <ListItemButton>
                <ListItemIcon>
                    <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary="Product" />
            </ListItemButton>
        </Link>
        <Link href="/astro/faq" passHref>
            <ListItemButton>
                <ListItemIcon>
                    <QuestionMarkIcon />
                </ListItemIcon>
                <ListItemText primary="FAQ" />
            </ListItemButton>
        </Link>
        <Link href="/astro/blog" passHref>
            <ListItemButton>
                <ListItemIcon>
                    <NewspaperIcon />
                </ListItemIcon>
                <ListItemText primary="Blog" />
            </ListItemButton>
        </Link>
    </>
);

export const secondaryListItems = (
    <>
        <ListSubheader component="div" inset>
            Homepage
        </ListSubheader>
        <Link href="/astro/header" passHref>
            <ListItemButton>
                <ListItemIcon>
                    <PhotoIcon />
                </ListItemIcon>
                <ListItemText primary="Header Image" />
            </ListItemButton>
        </Link>
        <Link href="/astro/about" passHref>
            <ListItemButton>
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About Us" />
            </ListItemButton>
        </Link>
        <Link href="/astro/reviews" passHref>
            <ListItemButton>
                <ListItemIcon>
                    <RateReviewIcon />
                </ListItemIcon>
                <ListItemText primary="Reviews" />
            </ListItemButton>
        </Link>
    </>
);
