import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  @media ${device.laptop} {
    display: inline;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media ${device.laptop} {
    margin-bottom: 40px;
  }
`;

const ProjectName = styled.h2`
  margin: 0px;
  font-weight: 500;
  font-size: 20px;
  padding-right: 20px;
`;

const MenuButton = styled.button`
  width: 100%;
  text-align: right;
  background-color: inherit;
  border: none;
  outline: none;

  @media ${device.laptop} {
    display: none;
  }
`;

interface NavProps {
  open: boolean;
}

const Nav = styled.nav<NavProps>`
  display: ${(props) => (props.open ? "inline" : "none")};

  @media ${device.laptop} {
    display: inline;
  }
`;

const Ul = styled.ul`
  padding: 0px;
  margin-bottom: 0px;
`;

const List = styled.li`
  line-height: 2.5;
  list-style: none;
`;

const Navigation: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <HeaderContainer>
        <Header>
          <ProjectName>FX support</ProjectName>
          <a href="https://github.com/kz665432/margin-sample">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </Header>

        <MenuButton onClick={onClick}>
          {open ? (
            <FontAwesomeIcon icon={faTimes} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </MenuButton>
      </HeaderContainer>

      <Nav open={open}>
        <Ul>
          <List>
            <Link to="/margin-sample" onClick={onClick}>
              証拠金維持率計算
            </Link>
          </List>
          <List>
            <Link to="/margin-sample/document" onClick={onClick}>
              計算方法
            </Link>
          </List>
        </Ul>
      </Nav>
    </>
  );
};

export default Navigation;
