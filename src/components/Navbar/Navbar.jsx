import React from 'react';
import { AppBar, Box, Toolbar, Typography, InputBase, Badge, ListItemText, ListItemIcon, CssBaseline, useTheme, useMediaQuery } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import clsx from  'clsx';
import theme from '../../styles/theme/theme'
import Colors from "../../styles/theme/theme";
import { ThemeProvider, Container } from '@material-ui/core'; 
import useStyles from './styles';

import { MyList } from '../../styles/Navbar/Navbar';
import { ListItemButton } from '@mui/material';
import Tools from '../Tools/Tools';
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';


export default function Navbar() {

    const theme= useTheme();
    const matches= useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {matches ? (
                <NavbarMobile matches={matches} />
            ) : (
                <NavbarDesktop matches={matches} />
            )}
        </>

    );
}

// {matches ? (
//     <NavbarMobile matches={matches} />
// ) : (
//     <NavbarDesktop matches={matches} />
// )}