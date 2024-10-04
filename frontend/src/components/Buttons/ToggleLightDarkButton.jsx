import Cookies from 'js-cookie';
import { lightTheme, darkTheme } from '../../themes';
import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import 'material-icons/iconfont/material-icons.css';
import { motion } from 'framer-motion';


const ToggleLightDarkButton = ({className}) => {
    const [themeMode, setThemeMode] = useState(() => Cookies.get('theme') || 'light');
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
            <motion.div
                className={className}
                initial={{ rotate: 0 }}
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{ display: 'inline-block' }}
            >
            <Button onClick={toggleTheme} variant="outlined"
                    color="info"
                    sx={{
                        width: 48,
                        height: 48,
                        minWidth: 0,
                        minHeight: 0,
                        border: '2px solid',
                        borderRadius: '10px',
                        padding: 0,
                        '&:hover': {
                            border: '2px solid',
                            borderColor: 'info.dark',
                        },
                    }}>
                <span className="material-icons">
                {themeMode === 'light' ? 'dark_mode' : 'light_mode'}
                </span>
            </Button>
            </motion.div>
        </ThemeProvider>
    );
};

export default ToggleLightDarkButton;