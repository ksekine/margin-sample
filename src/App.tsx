import React from "react";
import Navigation from "./components/molecules/Navigation";
import Margin from "./components/pages/Margin";
import MarginDocument from "./components/pages/MarginDocument";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { device } from "./styles";

const Enclosure = styled.div`
  @media ${device.laptop} {
    display: grid;
    position: relative;
    grid-template-columns: 240px 1fr;
    grid-template-rows: auto;
  }
`;

const Nav = styled.div`
  border-bottom: solid 1px rgba(224, 224, 224, 1);

  @media ${device.laptop} {
    display: block;
    position: fixed;
    top: 0;
    width: 240px;
    overflow-y: auto;
    height: 100%;
    grid-column: 1/2;
    overscroll-behavior: contain;
    border-right: solid 1px rgba(224, 224, 224, 1);
  }
`;

const Main = styled.main`
  @media ${device.laptop} {
    width: 100%;
    display: block;
    grid-column: 2/3;
    overflow: hidden;
  }
`;

const MainContainer = styled.div`
  margin-right: 16px;
  margin-left: 16px;
  @media ${device.laptop} {
    margin-left: 40px;
    margin-right: 40px;
  }
`;

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <Router>
        <Enclosure>
          <Nav>
            <Navigation />
          </Nav>
          <Main>
            <MainContainer>
              <Switch>
                <Route path="/margin-sample" exact>
                  <Margin />
                </Route>
                <Route path="/margin-sample/document">
                  <MarginDocument />
                </Route>
              </Switch>
            </MainContainer>
          </Main>
        </Enclosure>
      </Router>
    </StylesProvider>
  );
};

export default App;
