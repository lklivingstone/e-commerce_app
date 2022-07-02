import React from 'react';
import { AppBar, Box, Toolbar, Typography, InputBase, Badge } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import clsx from  'clsx';

import useStyles from './styles';

const Navbar = () => {
    const classes= useStyles();

    return (
        <AppBar position= "static" style={{ background: '#2E3B55' }}>
            <Toolbar className={classes.toolbar}>
                <Box className={clsx(classes.search, classes.flexone)}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase placeholder="Search" classes={{root:classes.inputRoot, input:classes.inputInput}}></InputBase>
                </Box >
                <Box className={classes.flexone}>
                    <Typography variant="h5" style={{display: "flex", justifyContent: "center"}}>
                    {/* className= {classes.title} */}
                        tessst.
                    </Typography>
                </Box>
                
                <Box className={clsx(classes.flexone, classes.rightItems)} style={{display: "flex", justifyContent: "flex-end"}}>
                    <Typography variant="h7" className={classes.marginBetween}>
                        Register
                    </Typography>
                    <Typography variant="h7">
                        Signin
                    </Typography>
                    <Badge badgeContent={4} color="primary" className= {classes.shoppingCartIcon}>
                        <ShoppingCartOutlined fontSize="Small"/>
                    </Badge>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;