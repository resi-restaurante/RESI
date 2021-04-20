import Routes from './pages/routes';
import AppProvider from './core/hooks/index';

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  )
}

export default App;
