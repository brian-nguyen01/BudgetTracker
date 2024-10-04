import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie'; 
import { lightTheme, darkTheme } from '../../themes'; 

const PrimaryButton = ({ label }) => {
    const [theme] = useState(() => Cookies.get('theme') || 'light');

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Button variant="contained" color="primary" >
                {label}
            </Button>
        </ThemeProvider>
    );
};

export default PrimaryButton;
