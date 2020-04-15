import React from "react";
import styled from "styled-components";

const ProjectName = styled.h2`
  font-weight: 500;
  margin-top: 40px;
  margin-left: 30px;
  margin-bottom: 40px;
`;

const Ul = styled.ul`
  padding-left: 30px;
`;

const List = styled.li`
  line-height: 2.5;
  list-style: none;
`;

const Navigation: React.FC = () => {
  return (
    <>
      <ProjectName>FX support</ProjectName>
      <nav>
        <Ul>
          <List>証拠金維持率計算</List>
          <List>証拠金維持率計算</List>
          <List>証拠金維持率計算</List>
        </Ul>
      </nav>
    </>
  );
};

export default Navigation;
