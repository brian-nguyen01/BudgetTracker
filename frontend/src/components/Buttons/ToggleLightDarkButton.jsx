import Cookies from 'js-cookie';
import { lightTheme, darkTheme } from '../../themes';
import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';

const ToggleLightDarkButton = () => {
    const [themeMode, setThemeMode] = useState(() => Cookies.get('theme') || 'light');
    let otherTheme;
    if (themeMode === 'light') {
        otherTheme = 'dark';
    } else {
        otherTheme = 'light';
    }
    const theme = useMemo(() => (themeMode === 'light' ? lightTheme : darkTheme), [themeMode]);
    const toggleTheme = () => {
        setThemeMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            Cookies.set('theme', newMode, { expires: 365 });
            return newMode;
        });
        window.location.reload();
    };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button onClick={toggleTheme} variant="contained" color="primary" style={{ margin: '16px' }}>
                Toggle {otherTheme}
            </Button>
        </ThemeProvider>
    );
};

export default ToggleLightDarkButton;