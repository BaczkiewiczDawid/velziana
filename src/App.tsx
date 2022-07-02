import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
