import styled from "styled-components"
import { color } from "../../theme/color";
import { paymentImg } from "../../assets";
import { fonts } from "../../theme/font";

export const FeaturesBackground = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid rebeccapurple;
  padding: 48px 0;
  gap: 30px;
`;

export const FeatureContainer = styled.div`
  width: 90%;
  height: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rebeccapurple;
`;


export const FeatureLeft = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  border: 2px solid rebeccapurple;
`;

interface FeatureRightProps{
    $img: string;
}

export const FeatureRight = styled.div<FeatureRightProps>`
  width: 35%;
  height: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  background-image: url(${((props)=> props.$img)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border: 2px solid rebeccapurple;
`;

export const FeatureTitle = styled.div`
  /* display: inline; */
  font-family: ${fonts.fontFamily.DMsans};
  font-size: ${fonts.fontSize.heading1};
  line-height: ${fonts.lineHeight.heading1};
  font-weight: ${fonts.fontWeight.bold};
  letter-spacing: ${fonts.letterSpacing.heading};
  color: ${color.black.richBlack};
  /* border-bottom: 2px solid green; */
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading1};
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
  font-size: ${fonts.fontSize.body1};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.heading3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: #303030;
  width: 100%;
  height: auto;
  /* border: 2px solid yellow; */

  @media screen and (max-width: 1440px) {
    /* width: 470px;
    height: 60px; */
    font-size: ${fonts.fontSize.body2};
    line-height: ${fonts.lineHeight.heading3};
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


export const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid rebeccapurple;
`;