import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie'; 
import { lightTheme, darkTheme } from '../../themes'; 
import 'material-icons/iconfont/material-icons.css';
import { motion } from 'framer-motion';

const SettingsButton = ({ className }) => {
    const [theme] = useState(() => Cookies.get('theme') || 'light');

    return (      
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <motion.div
                className={className}  // Apply the className here
                initial={{ rotate: 0 }}
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                style={{ display: 'inline-block' }}
            >
                <Button
                    variant="outlined"
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
                    }}
                >
                    <span className="material-icons">settings</span>
                </Button>
            </motion.div>
        </ThemeProvider>
    );
};

export default SettingsButton;
