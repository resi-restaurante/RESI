import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import './assets/styles/animation.css';

export function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
