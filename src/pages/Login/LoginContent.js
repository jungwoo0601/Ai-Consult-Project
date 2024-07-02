import React from "react";
import styled from "styled-components";

const WhiteBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 50%;
  height: 45%;

  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 150px; /* 여기에 원하는 픽셀 값을 입력 */
`;

const LoginButton = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &.kakao {
    background-color: #fee500;
    color: black;
  }

  &.naver {
    background-color: #1ec800;
    color: white;
  }

  &.google {
    background-color: #4285f4;
    color: white;
  }
`;

const LoginPageContent = () => {
  return (
    <WhiteBox>
      <h1 style={{ position: "absolute", left: "50px" }}>로그인 및 회원가입</h1>
      <h3 style={{ position: "absolute", left: "50px", top: "60px" }}>
        소셜 로그인으로 이용하실 수 있습니다
      </h3>
      <Container>
        <LoginButton className="kakao">
          카카오 계정으로 가입 / 로그인
        </LoginButton>
        <LoginButton className="naver">
          네이버 계정으로 가입 / 로그인
        </LoginButton>
        <LoginButton className="google">
          구글 계정으로 가입 / 로그인
        </LoginButton>
      </Container>
    </WhiteBox>
  );
};

export default LoginPageContent;
