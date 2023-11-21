import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  Theme,
  Box,
  useMediaQuery,
  CssBaseline,
} from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

function App() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: isMobile ? '100%' : 'calc(100% - 240px)',
            marginLeft: isMobile ? 0 : '240px',
            height: isMobile ? 'unset' : 'calc(100% - 70px)',
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  )
}

export default App
