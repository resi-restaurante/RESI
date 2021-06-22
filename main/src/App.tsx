import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import { AuthProvider } from './hooks/AuthContext';
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
