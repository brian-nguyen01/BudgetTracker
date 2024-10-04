import React, { lazy, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline} from '@mui/material';
import { lightTheme, darkTheme } from './themes';
import Cookies from 'js-cookie';
import SettingsButton from './components/Buttons/SettingsButton';
import './index.scss'

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

const App = () => {
  const [themeMode] = useState(() => Cookies.get('theme') || 'light');

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router>
        <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <SettingsButton className="settings-button" />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
