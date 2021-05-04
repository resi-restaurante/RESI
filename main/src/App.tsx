import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './pages/routes';
import AppProvider from './core/hooks/index';

import './assets/styles/animation.css';

export function App() {
  return (
    <AppProvider>
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  );
}
