import React from "react";
import Navigation from "./components/molecules/Navigation";
import Margin from "./components/pages/Margin";
import styled from "styled-components";

const Enclosure = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto;
`;

const Nav = styled.div`
  display: block;
  position: fixed;
  top: 0;
  width: 240px;
  overflow-y: auto;
  height: 100%;
  background-color: #05264c;
  color: #fff;
`;

const Main = styled.main`
  width: 100%;
  display: block;
  grid-column: 2/3;
  overflow: hidden;
`;

const MainContainer = styled.div`
  padding-left: 40px;
  padding-right: 40px;
`;

const App: React.FC = () => {
  return (
    <Enclosure>
      <Nav>
        <Navigation />
      </Nav>
      <Main>
        <MainContainer>
          <Margin />
        </MainContainer>
      </Main>
    </Enclosure>
  );
};

export default App;
