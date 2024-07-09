// App.js

import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import IntroLawyerPage from "./pages/IntroLawyers/IntroLawyerPage";
import LoginPage from "./pages/Login/LoginPage"; // 이곳에서 /login을 /lo로 바꾸고 싶어요.
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminPage from "./pages/Login/AdminPage";

const AppContainer = styled.div`
  background: url(${process.env.PUBLIC_URL}/assets/background.png) no-repeat
    center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
`;

const Content = styled.div`
  flex: 1;
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
            <Route path="/login" element={<LoginPage />} />{" "}
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Content>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
