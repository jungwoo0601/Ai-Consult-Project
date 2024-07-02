import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  font-size: 13px;
  text-align: center;
  width: 100%;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000; // 헤더와 다른 요소 위에 표시되도록 z-index 설정
`;

const Footer = () => {
  return (
    <FooterContainer>&copy; 2024. 스스LAW All rights reserved.</FooterContainer>
  );
};

export default Footer;
