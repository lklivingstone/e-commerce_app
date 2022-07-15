import React from 'react';
import { AppBar, Box, Toolbar, Typography, InputBase, Badge, ListItemText, ListItemIcon, CssBaseline } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import theme from '../../styles/theme/theme'
import { ThemeProvider, Container } from '@material-ui/core'; 
import useStyles from '../../styles/Navbar/styles';
import { MyList } from '../../styles/Navbar/Navbar';
import { ListItemButton } from '@mui/material';
import Tools from '../Tools/Tools';


export default function Navbar({ matches }) {

    const classes= useStyles();
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <AppBar position= "static">
                <Toolbar className={classes.toolbar}>
                    <Box className={classes.flexone}>
                        <Typography variant="h4" color="secondary" style={{display: "flex", justifyContent: "center"}}>
                            tessst.
                        </Typography>
                    </Box>
                    <MyList type='row'>
                        <ListItemText primary="Home"/>
                        <ListItemText color="secondary">Products</ListItemText>
                        <ListItemText color="inherit">Categories</ListItemText>
                        <ListItemText>Contact Us</ListItemText>
                        
                        <ListItemButton>
                            <ListItemIcon>  
                                    <SearchIcon style={{color: "white"}}/>
                                {/* <InputBase placeholder="Search" classes={{root:classes.inputRoot, input:classes.inputInput}}></InputBase> */}
                            </ListItemIcon>
                        </ListItemButton>
                    </MyList>
                    <Tools macthes={matches}/>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}




                {/* <Box className={clsx(classes.search, classes.flexone)}>
                    <div className={classes.searchIcon}>
                        
                    </div>
                    
                </Box > */}
                
                
                {/* <Box className={clsx(classes.flexone, classes.rightItems)} style={{display: "flex", justifyContent: "flex-end"}}>
                    <Typography variant="h7" className={classes.marginBetween}>
                        Register
                    </Typography>
                    <Typography variant="h7">
                        Signin
                    </Typography>
                    <Badge badgeContent={4} color="primary" className= {classes.shoppingCartIcon}>
                        <ShoppingCartOutlined fontSize="Small"/>
                    </Badge>
                </Box> */}