import React from "react";
import styled from "styled-components";

const WhiteBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  height: 50%;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DottedLine = styled.div`
  position: absolute;
  top: 30%;
  left: 7%;
  width: 85%;
  border-top: 1px dotted #000;
  transform: translateY(-50%);
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 150px; /* 여기에 원하는 픽셀 값을 입력 */
`;

const LoginButton = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 0px;
  transform: translate(0, 50px);
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
    background-color: white;
    border: 0.5px solid black;
    color: black;

    span {
      margin-left: 80px;
    }
  }

  &.admin {
    background-color: #000;
    color: white;
    margin-top: 20px;
  }

  img {
    height: 40px;
    margin-left: 10px;
    width: auto;
  }

  span {
    margin-left: 70px; /* Adjust this value to move the text right */
  }
`;

const AdminLoginButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 30%;
  height: auto;
  position: absolute;
  left: 50%;
  top: 75%; /* Adjust this value if necessary */
  transform: translate(-50%, 0);
`;

const LoginPageContent = () => {
  return (
    <>
      <WhiteBox>
        <h1 style={{ position: "absolute", left: "50px" }}>
          로그인 및 회원가입
        </h1>
        <h3 style={{ position: "absolute", left: "50px", top: "60px" }}>
          소셜 로그인으로 이용하실 수 있습니다
        </h3>
        <DottedLine />
        <Container>
          <LoginButton className="kakao">
            <img src="/assets/loginImage/Kakao_icon.png" alt="Kakao" />
            <span>카카오 계정으로 가입 / 로그인</span>
          </LoginButton>
          <LoginButton className="naver">
            <img src="/assets/loginImage/Naver_icon.png" alt="Naver" />
            <span>네이버 계정으로 가입 / 로그인</span>
          </LoginButton>
          <LoginButton className="google">
            <img src="/assets/loginImage/Google_icon.png" alt="Google" />
            <span>구글 계정으로 가입 / 로그인</span>
          </LoginButton>
        </Container>
      </WhiteBox>
      <AdminLoginButtonContainer>
        <LoginButton className="admin">관리자로 로그인</LoginButton>
      </AdminLoginButtonContainer>
    </>
  );
};

export default LoginPageContent;
