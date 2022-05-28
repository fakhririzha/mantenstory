import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NewspaperIcon from '@mui/icons-material/Newspaper';
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
        <Link href="/astro/product" passHref>
            <ListItemButton>
                <ListItemIcon>
                    <CategoryIcon />
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
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </>
);
