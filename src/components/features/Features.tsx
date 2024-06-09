import React from 'react'
import { ButtonContainer, FeatureContainer, FeatureLeft, FeatureRight, FeaturesBackground, FeatureSubtitleText, FeatureTitle } from './features.styles'
import CustomButton from '../button/CustomButton';
import { color } from '../../theme/color';
import { featureData } from './featuresData';

const Features = () => {
  return (
    <FeaturesBackground>
      {featureData.map((feature) => (
        <FeatureContainer key={feature.id}>
          <FeatureLeft>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureSubtitleText>
              {feature.subtitle}
            </FeatureSubtitleText>

            <ButtonContainer>
              <CustomButton
                borderRadius={feature.borderRadius}
                bgColor={color.primary.brandeisBlue}
              >
                Download App
              </CustomButton>
            </ButtonContainer>
          </FeatureLeft>
          <FeatureRight $img={feature.image} />
        </FeatureContainer>
      ))}
    </FeaturesBackground>
  );
}

export default Features