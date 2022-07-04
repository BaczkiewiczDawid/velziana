import GlobalStyle from "assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "components/Dashboard/Dashboard";
import ShoppingCart from "components/ShoppingCart/ShoppingCart";
import Navigation from "components/Navigation/Navigation";
import styled from "styled-components";
import ShoppingCartProvider from "context/ShoppingCartContext";

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
          <ShoppingCartProvider>
            <Router>
              <Navigation />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cart" element={<ShoppingCart />} />
              </Routes>
            </Router>
          </ShoppingCartProvider>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
