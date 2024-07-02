import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import IntroLawyerPage from "./pages/IntroLawyers/IntroLawyerPage";
import LoginPage from "./pages/Login/LoginPage";

import Header from "./components/Header";
import Footer from "./components/Footer"; // Footer 컴포넌트 임포트

const AppContainer = styled.div`
  background: url(${process.env.PUBLIC_URL}/assets/background.png) no-repeat
    center center;
  background-size: cover;
  min-height: 100vh; // 전체 화면 높이 설정
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
`;

const Content = styled.div`
  flex: 1; // flex-grow 설정으로 남은 공간을 채움
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/introLawyer" element={<IntroLawyerPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Content>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
