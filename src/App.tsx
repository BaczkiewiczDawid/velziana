import GlobalStyle from "assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "components/Dashboard/Dashboard";
import Navigation from "components/Navigation/Navigation";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Navigation />
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Router>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
