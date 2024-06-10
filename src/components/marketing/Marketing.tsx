import { move, orangeButton} from "../../assets";
import {
  CTAText,
  FeatureSubtitleText,
  IconContainer,
  Learn,
  MarketingBackground,
  MarketingElement,
  MarketingTitle,
  SmallButton,
  SubtitleContainer,
  TextContainer,
  TitleContainer,
  UpperIcon,
} from "./Marketing.styles";
import { marketData } from "./marketingData";

const Marketing = () => {
  return (
    <MarketingBackground>
      {marketData.map((data) => (
        <MarketingElement key={data.id} $bgColor={data.bgColor}>
          <IconContainer>
            <UpperIcon src={data.headerIcon} />
          </IconContainer>
          <TextContainer>
            <TitleContainer>
              <MarketingTitle>{data.title}</MarketingTitle>
              <MarketingTitle>CredPal</MarketingTitle>
            </TitleContainer>

            <FeatureSubtitleText>
              {data.subtitle}
            </FeatureSubtitleText>
          </TextContainer>
          <Learn>
            <CTAText>Learn More</CTAText>
            <SmallButton src={data.ctaIcon} />
          </Learn>
        </MarketingElement>
      ))}

      {/* <MarketingElement></MarketingElement>
      <MarketingElement></MarketingElement>
      <MarketingElement></MarketingElement> */}
    </MarketingBackground>
  );
};

export default Marketing;
