import styled from "styled-components";
import { fonts } from "../../theme/font";
import { color } from "../../theme/color";


export const MarketingBackground = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  /* gap: 30px; */
`;

interface MarketingElementprops{
    $bgColor: string;
}

export const MarketingElement = styled.div<MarketingElementprops>`
  width: 24%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${((props)=> props.$bgColor)};
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  /* gap: 30px; */
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 2px solid red; */
  /* padding: 48px 0; */
  /* gap: 30px; */
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* border: 2px solid red; */
  /* padding: 48px 0; */
  /* gap: 30px; */
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border: 2px solid red; */
  /* padding: 48px 0; */
  gap: 5px;
`;

export const SubtitleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border: 2px solid red; */
  /* padding: 48px 0; */
  gap: 10px;
`;

export const Learn = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  /* border: 2px solid red; */
  /* padding: 48px 0; */
  gap: 7px;
`;


export const MarketingTitle = styled.div`
  /* display: inline; */
  font-family: ${fonts.fontFamily.DMsans};
  font-size: ${fonts.fontSize.heading1};
  line-height: ${fonts.lineHeight.heading2};
  font-weight: ${fonts.fontWeight.bold};
  letter-spacing: ${fonts.letterSpacing.heading};
  color: ${color.black.richBlack};
  /* border-bottom: 2px solid green; */
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.heading2};
    line-height: ${fonts.lineHeight.heading3};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.display2};
    line-height: ${fonts.lineHeight.heading1};
  }

  @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.display2};
    line-height: ${fonts.lineHeight.heading1};
  }

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  }

  @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  }
  @media screen and (max-width: 320px) {
    font-size: ${fonts.fontSize.heading2};
    line-height: ${fonts.lineHeight.heading2};
  }
`;

export const FeatureSubtitleText = styled.div`
  font-size: ${fonts.fontSize.body2};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: #303030;
  width: 100%;
  height: auto;
  /* border: 2px solid yellow; */

  @media screen and (max-width: 1440px) {
    /* width: 470px;
    height: 60px; */
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 768px) {
    width: 55%;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }
`;
export const CTAText = styled.div`
  font-size: ${fonts.fontSize.body1};
  font-weight: ${fonts.fontWeight.bold};
  line-height: ${fonts.lineHeight.footer1};
  letter-spacing: ${fonts.letterSpacing.body};
  color: #303030;
  /* width: 100%;
  height: auto; */
  /* border: 2px solid yellow; */

  @media screen and (max-width: 1440px) {
    /* width: 470px;
    height: 60px; */
    font-size: ${fonts.fontSize.body2};
    line-height: ${fonts.lineHeight.footer2};
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 768px) {
    width: 55%;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }
`;


export const SmallButton = styled.img`
  width: auto;
  height: auto;
  
`;

export const UpperIcon = styled.img`
  width: auto;
  height: auto;
  
`;