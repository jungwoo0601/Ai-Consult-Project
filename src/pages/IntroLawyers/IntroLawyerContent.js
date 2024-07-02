import React from "react";
import styled from "styled-components";

// 스타일 정의
const MainContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
`;

const Nav = styled.nav`
  margin-top: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
  cursor: pointer;
  font-weight: bold;
  color: white; // 텍스트 색상 추가
`;

const LawyerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const LawyerCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 30px;
  text-align: center;
  margin: 8px;
  background-color: #fff;
  width: 400px;
`;

const LawyerPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
`;

const LawyerName = styled.h3`
  font-size: 30px;
  margin: 8px 0;
  color: #333; // 텍스트 색상 추가
`;

const LawyerSpecialty = styled.p`
  color: #666;
  font-size: 20px;
`;

// LawyerCard 컴포넌트 정의
const LawyerCard = ({ name, specialty, imgSrc }) => {
  return (
    <LawyerCardContainer>
      <LawyerPhoto src={imgSrc} alt={`${name}`} />
      <LawyerName>{name}</LawyerName>
      <LawyerSpecialty>{specialty}</LawyerSpecialty>
    </LawyerCardContainer>
  );
};

// 변호사 목록 데이터
const lawyers = [
  {
    name: "한상진 변호사",
    specialty: "상속 전문 변호사",
    imgSrc: "lawyer1.jpg", // 이미지 경로는 나중에 설정
  },
  {
    name: "이상민 변호사",
    specialty: "이혼 전문 변호사",
    imgSrc: "path_to_image2.jpg", // 이미지 경로는 나중에 설정
  },
  {
    name: "박성재 변호사",
    specialty: "형사전문 변호사",
    imgSrc: "path_to_image3.jpg", // 이미지 경로는 나중에 설정
  },
];

// IntroLawyerPage 컴포넌트 정의
const IntroLawyerContent = () => {
  return (
    <MainContainer>
      <Header>
        <h1>변호사 소개</h1>
        <Nav>
          <NavList>
            <NavItem>상속</NavItem>
            <NavItem>이혼</NavItem>
            <NavItem>성범죄</NavItem>
            <NavItem>교통</NavItem>
            <NavItem>살인</NavItem>
          </NavList>
        </Nav>
      </Header>
      <LawyerGrid>
        {lawyers.map((lawyer, index) => (
          <LawyerCard
            key={index}
            name={lawyer.name}
            specialty={lawyer.specialty}
            imgSrc={lawyer.imgSrc}
          />
        ))}
      </LawyerGrid>
    </MainContainer>
  );
};

export default IntroLawyerContent;
