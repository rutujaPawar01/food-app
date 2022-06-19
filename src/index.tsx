import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#f9fbe7",
    },
    info: {
      main: "#ffcf33",
    },
    error: {
      main: "#ff1744",
    },
    warning: {
      main: "#616161",
    },
    text: {
      primary: "#616161",
      secondary: "#bdbdbd",
    },
  },
  typography: {
    htmlFontSize: 15,
    subtitle1: {
      fontSize: 15,
      fontWeight: 'bold'
    },
    subtitle2: {
      fontSize: 14,
    },
    h3: {
      fontSize: 40,
    },
    body1: {
      fontSize: 16,
      color: "#616161"
    },
    h6: {
      fontSize: 23,
      color: "#ff1744",
      fontWeight: 'bold'
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
