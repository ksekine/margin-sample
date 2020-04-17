import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
          <List>
            <Link to="/margin-sample">証拠金維持率計算</Link>
          </List>
          <List>
            <Link to="/margin-sample/document">計算方法</Link>
          </List>
        </Ul>
      </nav>
    </>
  );
};

export default Navigation;
