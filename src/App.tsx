import GlobalStyle from "assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "components/Dashboard/Dashboard";
import ShoppingCart from "components/ShoppingCart/ShoppingCart";
import Navigation from "components/Navigation/Navigation";
import Checkout from "components/Checkout/Checkout";
import styled from "styled-components";
import ShoppingCartProvider from "context/ShoppingCartContext";
import Main from "components/Main/Main";
import Bills from 'components/Bills/Bills';

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
              <Main />
              <Navigation />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/bills" element={<Bills />} />
              </Routes>
            </Router>
          </ShoppingCartProvider>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
