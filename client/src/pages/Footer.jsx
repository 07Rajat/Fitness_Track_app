import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Terms of use        Privacy policy       Contact us</p>
      <p>&copy; 2024 FitnessTrack. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
