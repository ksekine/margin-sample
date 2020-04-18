import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../styles";
import githubIcon from "../../imgs/GitHub-Mark-120px-plus.png";
import closeIcon from "../../imgs/close.svg";
import menuIcon from "../../imgs/menu.svg";

const NavContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${device.laptop} {
    display: inline;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const ProjectName = styled.h2`
  margin: 0px;
  padding: 20px 16px;
  font-weight: 500;
  font-size: 20px;

  @media ${device.laptop} {
    padding-top: 40px;
    padding-left: 30px;
    padding-bottom: 40px;
  }
`;

interface MenuButtonProps {
  menuIcon: string;
  closeIcon: string;
}

const MenuButton = styled.button<MenuButtonProps>`
  background: ${(props) => `url(${props.menuIcon})`} no-repeat right;
  width: 30px;
  height: 30px;

  @media ${device.laptop} {
    display: none;
  }
`;

const Nav = styled.nav`
  display: none;

  @media ${device.laptop} {
    display: inline;
  }
`;

const Ul = styled.ul`
  padding-left: 30px;
`;

const List = styled.li`
  line-height: 2.5;
  list-style: none;
`;

const Navigation: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  console.log(typeof menuIcon);

  return (
    <NavContainer>
      <Header>
        <ProjectName>FX support</ProjectName>
        <a href="https://github.com/kz665432/margin-sample">
          <img src={githubIcon} height="30px" />
        </a>
      </Header>
      <MenuButton menuIcon={menuIcon} closeIcon={closeIcon} />
      <Nav>
        <Ul>
          <List>
            <Link to="/margin-sample">証拠金維持率計算</Link>
          </List>
          <List>
            <Link to="/margin-sample/document">計算方法</Link>
          </List>
        </Ul>
      </Nav>
    </NavContainer>
  );
};

export default Navigation;
