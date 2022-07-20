import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { ThemeProvider } from '@material-ui/core'; 
import { CssBaseline } from '@material-ui/core';
import { useEffect } from 'react';
import theme from '../styles/theme/theme'
import Slider from '../components/Slider/Slider';
import Categories from '../components/Categories/Categories';

const Home = () => {
    //Title of the page. Runs only once.
    useEffect(() => {
        document.title= "Home | e-tesst.";
    }, []);

    


    return (
        <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <Navbar />
            <Slider />
            <Categories />
        </ThemeProvider>
        </>
    )
}

export default Home;