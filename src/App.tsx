import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from 'components/Dashboard/Dashboard';
import Navigation from 'components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
