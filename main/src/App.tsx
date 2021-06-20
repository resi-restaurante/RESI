import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './pages/routes';
import './assets/styles/animation.css';

export function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
