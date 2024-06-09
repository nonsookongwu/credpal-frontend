import styled from "styled-components";
import { color } from "../../theme/color";


export const HomeBackground = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.primary.brandeisBlue};
`;

export const InnerHomeBackground = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 2px solid red;
`;

export const HeroBackground = styled.div`
  width: 100%;
  height: auto;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${color.primary.brandeisBlue};
`;
