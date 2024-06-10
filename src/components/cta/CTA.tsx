import React from "react";
import { CTABackground, CTAContainer, CTASubtitleText, CTATitle, TextContainer } from "./CTA.styles";
import CustomButton from "../button/CustomButton";
import { color } from "../../theme/color";

const CTA = () => {
  return (
    <CTABackground>
      <CTAContainer>
          <TextContainer>
            <CTATitle>Start building your credit score today</CTATitle>
            <CTASubtitleText>
              Download our app to get started on your credit journey in Africa. Make
              the first move towards a better financial future today.
            </CTASubtitleText>
          </TextContainer>
          <CustomButton
            borderRadius="16px"
                  bgColor={color.white.white}
                  color={color.primary.brandeisBlue}
          >
            Download App
          </CustomButton>
      </CTAContainer>
    </CTABackground>
  );
};

export default CTA;
