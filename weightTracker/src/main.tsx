import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from './services/store';


const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand, sans-serif',
  },
  palette: {
    primary: {
      main: '#5438DC',
      dark: '#4125D0',
      // light: '#7863E3',
      light: '#9686EA',
    },
    secondary: {
      light: '#F9F7F1',
      main: '#F2EFE3',
      dark: '#ECE7D5',
      darker: `rgb(223, 215, 185)`,
      // darker: '#DFD7B9',
    },
    success: {
      main: '#75E6A2',
      light: '#CBF6CF',
      dark: '#41DC7F',
    },
    warning: {
      main: '#ff5722',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
