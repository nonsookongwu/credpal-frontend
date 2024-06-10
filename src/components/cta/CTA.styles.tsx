import styled from "styled-components";
import { fonts } from "../../theme/font";
import { color } from "../../theme/color";

export const CTABackground = styled.div`
  width: 100%;
  height: 511px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  /* gap: 35px; */
`;
export const CTAContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
background-color: ${color.primary.brandeisBlue};
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  gap: 35px;
`;


export const TextContainer = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${color.white.white};
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  gap: 10px;
`;

export const CTATitle = styled.div`
  /* display: inline; */
  font-family: ${fonts.fontFamily.DMsans};
  font-size: ${fonts.fontSize.heading1};
  line-height: ${fonts.lineHeight.heading2};
  font-weight: ${fonts.fontWeight.bold};
  letter-spacing: ${fonts.letterSpacing.heading};
  /* color: ${color.black.richBlack}; */
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

export const CTASubtitleText = styled.div`
  font-size: ${fonts.fontSize.body2};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.heading3};
  letter-spacing: ${fonts.letterSpacing.body};
  text-align: center;

  @media screen and (max-width: 1440px) {
    /* width: 470px;
    height: 60px; */
    font-size: ${fonts.fontSize.body1};
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