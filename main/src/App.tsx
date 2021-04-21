import { Routes } from './pages/routes';
import AppProvider from './core/hooks/index';

export function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
