import React from 'react'
import { AndroidBadgeImage, BadgeImage, FooterBackground, FooterBox, FooterContainer, FooterDown, FooterLinkBox, FooterSubtitleText, FooterTitle, Footerup, LogoFooterBox } from './Footer.styles'
import { android, apple, footerLogo } from '../../assets'

const Footer = () => {
  return (
    <FooterBackground>
      <FooterContainer>
        <Footerup>
          <LogoFooterBox>
            <BadgeImage src={footerLogo} />
            <FooterSubtitleText>
              CredPal is a revolutionary credit solution geared towards
              providing seamless credit access for businesses and individuals
              across developing economies.
            </FooterSubtitleText>
          </LogoFooterBox>
          <FooterBox>
            <FooterTitle>Products</FooterTitle>
            <FooterLinkBox>
              <FooterSubtitleText>Credpal Personal</FooterSubtitleText>
              <FooterSubtitleText>Credpal Business</FooterSubtitleText>
              <FooterSubtitleText>Credpal Livestyle</FooterSubtitleText>
            </FooterLinkBox>
          </FooterBox>
          <FooterBox>
            <FooterTitle>Legal</FooterTitle>
            <FooterLinkBox>
              <FooterSubtitleText>Customer Terms of use</FooterSubtitleText>
              <FooterSubtitleText>Merchant Terms of service</FooterSubtitleText>
              <FooterSubtitleText>Privacy Notice</FooterSubtitleText>
            </FooterLinkBox>
          </FooterBox>
          <FooterBox>
            <FooterTitle>Support</FooterTitle>
            <FooterLinkBox>
              <FooterSubtitleText>FAQs</FooterSubtitleText>
              <FooterSubtitleText>Blogs</FooterSubtitleText>
              {/* <FooterSubtitleText>Credpal Livestyle</FooterSubtitleText> */}
            </FooterLinkBox>
          </FooterBox>
          <FooterBox>
            <FooterTitle>Contact us</FooterTitle>
            <FooterLinkBox>
              <FooterSubtitleText>hello@credpal.com</FooterSubtitleText>
              <FooterSubtitleText>+234 708 740 9746</FooterSubtitleText>
              {/* <FooterSubtitleText>Credpal Livestyle</FooterSubtitleText> */}
            </FooterLinkBox>
          </FooterBox>
          <FooterBox>
            <FooterTitle>Get the App</FooterTitle>
            <FooterLinkBox>
              <AndroidBadgeImage src={android} />
              <AndroidBadgeImage src={apple} />
            </FooterLinkBox>
          </FooterBox>
        </Footerup>
        <FooterDown>
          <FooterSubtitleText>
            CredPal financial services are offered by BishopGate Microfinance
            Bank, fully licensed and regulated by the Central bank of Nigeria.
            CredPal offers innovative financial solutions including payment,
            savings and credit services. Our credit solution allows businesses
            and individuals to buy anything and pay for it in instalments across
            online and offline merchants by providing them with instant access
            to credit at the point of checkout.
          </FooterSubtitleText>
        </FooterDown>
      </FooterContainer>
    </FooterBackground>
  );
}

export default Footer