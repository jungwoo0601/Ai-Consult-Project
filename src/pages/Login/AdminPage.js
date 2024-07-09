import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 50vh;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-20vh);
`;

const Title = styled.h1`
  font-size: 24px;
  color: black;
  margin: 0;
  transform: translateY(-100%);
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin: 10px 0 20px 0;
  color: red;
  transform: translateY(-100%);
`;

const Input = styled.input`
  width: 60%;
  padding: 10px;
  border: 3px solid gray;
  border-radius: 4px;
  font-size: 16px;
  transform: translateY(30%);
`;

const AdminPage = () => {
  return (
    <MainContainer>
      <FormContainer>
        <Title>관리자 코드를 입력하세요</Title>
        <Subtitle>관리자 인원 이외의 접근을 금지합니다</Subtitle>
        <Input type="password" placeholder="관리자 코드 입력" />
      </FormContainer>
    </MainContainer>
  );
};

export default AdminPage;
