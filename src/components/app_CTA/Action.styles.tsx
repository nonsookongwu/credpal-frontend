import styled from "styled-components";
import { actionImage } from "../../assets";
import { fonts } from "../../theme/font";
import { color } from "../../theme/color";


export const ActionBackground = styled.div`
  width: 100%;
  height: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f5ff;
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  /* gap: 35px; */
`;

export const ActionContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  /* gap: 35px; */
`;

export const ActionLeft = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  gap: 20px;
`;

export const DownLoad = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 2px solid rebeccapurple; */
  /* padding: 48px 0; */
  gap: 10px;
`;

export const ActionRight = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${actionImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  /* padding: 48px 0; */
  /* gap: 35px; */
`;

export const ActionTitle = styled.div`
  /* display: inline; */
  font-family: ${fonts.fontFamily.DMsans};
  font-size: ${fonts.fontSize.heading1};
  line-height: ${fonts.lineHeight.heading2};
  font-weight: ${fonts.fontWeight.bold};
  letter-spacing: ${fonts.letterSpacing.heading};
  /* color: ${color.black.richBlack}; */
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

export const ActionSubtitleText = styled.div`
  font-size: ${fonts.fontSize.body3};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.heading3};
  letter-spacing: ${fonts.letterSpacing.body};
  

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

export const BadgeImage = styled.img`
  width: auto;
  height: auto;
`;