import React, { Suspense, lazy, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { lightTheme, darkTheme } from './themes';
import Cookies from 'js-cookie';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

const App = () => {
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
      Cookies.set('theme', newMode, { expires: 365 }); // Save to cookies
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Button onClick={toggleTheme} variant="contained" color="primary" style={{ margin: '16px' }}>
          Toggle {otherTheme}
        </Button>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
