import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { ToastContextProvider } from './contexts/ToastContext';
import { ModalContextProvider } from './contexts/ModalContext';
import { LanguageContextProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
    <Router>
        <LanguageContextProvider>
            <ThemeContextProvider>
                <ToastContextProvider>
                    <ModalContextProvider>
                    
                        <App />
                    
                    </ModalContextProvider>
                </ToastContextProvider>
            </ThemeContextProvider>,
        </LanguageContextProvider>
    </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
