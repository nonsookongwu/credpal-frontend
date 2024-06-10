import styled from "styled-components";
import { fonts } from "../../theme/font";
import { color } from "../../theme/color";

export const FooterBackground = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f5ff;
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  /* gap: 35px; */
`;

export const FooterContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  /* gap: 35px; */
`;

export const Footerup = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* border: 2px solid red; */
`;
export const FooterDown = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* border: 2px solid rebeccapurple; */
`;


export const LogoFooterBox = styled.div`
  width: 30%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  gap: 25px;
`;
export const FooterBox = styled.div`
  width: auto;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  /* gap: 30px; */
`;

export const FooterLinkBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  gap: 7px;
`;

export const FooterTitle = styled.div`
  /* display: inline; */
  font-family: ${fonts.fontFamily.DMsans};
  font-size: ${fonts.fontSize.body1};
  line-height: ${fonts.lineHeight.body3};
  font-weight: ${fonts.fontWeight.bold};
  letter-spacing: ${fonts.letterSpacing.heading};
  /* color: ${color.black.richBlack}; */
  /* border-bottom: 2px solid green; */
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body2};
    line-height: ${fonts.lineHeight.body3};
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

export const FooterSubtitleText = styled.div`
  font-size: ${fonts.fontSize.body4};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.footer1};
  letter-spacing: ${fonts.letterSpacing.body};

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.footer1};
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

export const BadgeImage = styled.img`
  width: auto;
  height: auto;
`;

export const AndroidBadgeImage = styled.img`
  width: 5.9375rem;
  height: auto;
`;