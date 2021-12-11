import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

import { AuthProvider } from './contexts/Auth';
import './assets/styles/animation.css';

export function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  );
}
