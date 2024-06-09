import { Link } from "react-router-dom";

import {
  HeroContainer,
  HeroLeftContainer,
  HeroRightContainer,
  HeroText,
  HeroText2,
  HeroTextHolder,
  HeroTextHolder2,
  HeroTitleHolder,
  SubtitleText,
} from "./Hero.style";
import CustomButton from "../button/CustomButton";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroLeftContainer>
        <HeroTitleHolder>
          <HeroText>One App, all your</HeroText>
          {/* <HeroTextHolder>
            <HeroText>on African</HeroText>
            <HeroTextHolder2>
              <HeroText2>Food</HeroText2>
              <HeroText>&</HeroText>
            </HeroTextHolder2>
          </HeroTextHolder> */}
          <HeroText2>Financial Needs.</HeroText2>
        </HeroTitleHolder>
        <SubtitleText>
          Take control of your finances on the go! Make payments, save, invest,
          and access credit - all with one easy-to-use app.
        </SubtitleText>
        {/* <Link to={"/user_role"}>
          <CustomButton color={}>Get started</CustomButton>
        </Link> */}
      </HeroLeftContainer>
      <HeroRightContainer/>
    </HeroContainer>
  );
};

export default Hero;
