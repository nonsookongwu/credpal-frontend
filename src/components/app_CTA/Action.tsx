import React from 'react'
import { ActionBackground, ActionContainer, ActionLeft, ActionRight, ActionSubtitleText, ActionTitle, BadgeImage, DownLoad } from './Action.styles'
import { android, apple } from '../../assets';

const Action = () => {
  return (
    <ActionBackground>
      <ActionContainer>
        <ActionLeft>
          <ActionTitle>Join CredPal today</ActionTitle>
          <ActionSubtitleText>
            Download the CredPal app and join millions of satisfied customers
            who are already using CredPal to access credit, make payments,
            invest & many more!
                  </ActionSubtitleText>
                  <DownLoad>
                      <BadgeImage src={ android} />
                      <BadgeImage src={ apple} />
                  </DownLoad>
        </ActionLeft>
        <ActionRight />
      </ActionContainer>
    </ActionBackground>
  );
}

export default Action