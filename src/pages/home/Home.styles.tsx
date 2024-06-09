import styled from "styled-components";
import { color } from "../../theme/color";


export const HomeBackground = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeroBackground = styled.div`
  width: 100%;
  height: auto;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${color.primary.brandeisBlue};
`;
