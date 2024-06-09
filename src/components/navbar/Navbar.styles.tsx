import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../theme/color";
import { fonts } from "../../theme/font";
import { IoIosArrowDown } from "react-icons/io";


export const NavContainer = styled.nav`
  /* background-color: ${color.primary.brandeisBlue}; */
  border: 2px solid red;
  width: 100%;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 32px 0 32px; */
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }
`;

export const NavBarLeft = styled.div`
  border: 2px solid orange;
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 960px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const Logo = styled.img`
  width: auto;
`;

export const Navigation = styled.div`
  border: 2px solid yellow;
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 960px) {
    justify-content: center;
    gap: 20px;
  }
`;

interface NavMenuProps {
  $mobileopen: boolean;
}

export const NavMenu = styled.ul<NavMenuProps>`
  border: 2px solid red;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  text-decoration: none;
  padding: 0;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    position: absolute;
    top: 80px;
    left: ${(props) => (props.$mobileopen ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${color.black.darkCharcoal};
    box-sizing: border-box;
    padding: 10px;

    &:hover {
      background-color: ${color.primary.bleuDeFrance};
    }
  }
`;

export const MobileButton = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;

interface NavElementProps {
  $activeclass: boolean;
}

export const NavElements = styled(Link)<NavElementProps>`
  font-family: ${fonts.fontFamily.poppins};
  font-size: ${fonts.fontSize.body2};
  font-weight: ${(props) =>
    props.$activeclass
      ? `${fonts.fontWeight.regular}`
      : `${fonts.fontWeight.medium}`};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  cursor: pointer;
  color: ${(props) =>
    props.$activeclass
      ? `${color.white.chineseWhite}`
      : `${color.white.white}`};
  text-decoration: none !important;

  &:hover {
    font-weight: ${fonts.fontWeight.regular};
    color: ${color.primary.bleuDeFrance};
  }

  /* &:active {
    font-weight: ${fonts.fontWeight.regular};
    color: ${color.primary.bleuDeFrance};
  } */

  @media screen and (max-width: 960px) {
    width: 100%;
    color: ${color.white.white};
    &:hover {
      border: none;
    }
  }
`;

export const DesktopButton = styled.div`
  display: block;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: ${color.black.darkCharcoal};

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: ${color.white.white};
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    /* background: red; */
    display: block;
    position: absolute;
    top: 3px;
    right: 20px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;


export const FlagContainer = styled.div`
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border: 2px solid red; */
  color: ${color.white.white};
`;

export const FlagImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const ArrowDown = styled(IoIosArrowDown)`
  font-size: ${fonts.fontSize.heading3};
  color: ${color.white.white};
`;