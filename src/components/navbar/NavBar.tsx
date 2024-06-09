import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { IconContext } from "react-icons/lib";
import { RxHamburgerMenu } from "react-icons/rx";
// import { EGNLogo } from "../../assets";
import CustomButton from "../button/CustomButton";
import {
  ArrowDown,
  DesktopButton,
  FlagContainer,
  FlagImg,
  Logo,
  MobileButton,
  MobileIcon,
  NavBarLeft,
  NavContainer,
  NavElements,
  NavMenu,
  Navigation,
} from "./Navbar.styles";

import { Link, NavLink, useNavigate } from "react-router-dom";
// import useStorage from "../../hooks/useStorage";
import { color } from "../../theme/color";
import { flag, logo } from "../../assets";

const NavBar = () => {
  const navigate = useNavigate();
  const navElements = [
    { label: "Products", href: "/" },
    { label: "Business", href: "/services" },
    { label: "What we do", href: "/menu" },
    // { label: "Contact", href: "/contact" },
  ];

  const [openMobile, setOpenMobile] = useState(false);
  const [active, setActive] = useState(0);

  const handleOpenMobile = () => {
    setOpenMobile(!openMobile);
  };

  const handleActive = (index: number) => {
    setActive(index);
    console.log(index);
  };
//   const { savedToken } = useStorage();

  const handleLogOut = () => {
    // localStorage.removeItem("token");
    // navigate("/login");
    localStorage.clear();
    // window.location.reload();
  };

  return (
    <IconContext.Provider value={{ color: `${color.white.white}` }}>
      <NavContainer>
        <NavBarLeft>
          <NavLink to={"/"} onClick={() => handleActive(0)}>
            <Logo src={logo} />
          </NavLink>
          <NavMenu $mobileopen={openMobile} onClick={handleOpenMobile}>
            {/* <NavLinks to={"/"}>
              <NavElements
                onClick={() => handleActive(0)}
                activeclass={active === 0}
              >
                Home
              </NavElements>
            </NavLinks>
            <NavElements
              onClick={() => handleActive(1)}
              activeclass={active === 1}
            >
              <NavLinks to={"/services"}>Services</NavLinks>
            </NavElements>
            <NavElements
              onClick={() => handleActive(2)}
              activeclass={active === 2}
            >
              <NavLinks to={"/"}>Menu</NavLinks>
            </NavElements>
            <NavElements
              onClick={() => handleActive(3)}
              activeclass={active === 3}
            >
              <NavLinks to={"/"}>Contact</NavLinks>
            </NavElements> */}

            {navElements.map((navElement, index) => (
              
                <NavElements
                  to={`${navElement.href}`}
                  key={navElement.label}
                  $activeclass={active === index}
                  onClick={() => handleActive(index)}
                >
                  {navElement.label}
                </NavElements>
             
            ))}
            <MobileButton>
              <CustomButton 
                borderRadius="16px"
                children="Download the credpal app"
                onClick={handleLogOut}
              />

              {/* <Link to={"/login"}>
                  <CustomButton children="Login" />
                </Link> */}
            </MobileButton>
          </NavMenu>
        </NavBarLeft>
        <Navigation>
          <NavElements
            to={""}
            $activeclass={active === 4}
            onClick={() => handleActive(4)}
          >
            FAQ
          </NavElements>

          <FlagContainer>
            <FlagImg src={flag} />
            <ArrowDown/>
          </FlagContainer>

          <MobileIcon onClick={handleOpenMobile}>
            {openMobile ? <LiaTimesSolid /> : <RxHamburgerMenu />}
          </MobileIcon>

          <DesktopButton>
            <CustomButton borderRadius="16px"
              color="black"
              children="Download the CredPal App"
              onClick={handleLogOut}
            />

            {/* <Link to={"/login"}>
                <CustomButton children="Login" />
              </Link> */}
          </DesktopButton>
        </Navigation>
      </NavContainer>
    </IconContext.Provider>
  );
};

export default NavBar;
