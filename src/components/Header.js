import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const TopBar = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #111;
  padding: 15px 30px;
  color: #fff;
  font-size: 13px;
  border-bottom: 1px solid #fff;

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: transparent; // 투명 배경 설정
  color: #fff;
`;

const Logo = styled.div`
  font-family: "", cursive;
  font-size: 36px;
  display: flex;
  align-items: center;

  img {
    height: 50px;
    margin-right: 10px;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 100px;
    margin-left: 300px;
  }

  li {
    cursor: pointer;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 100px;

  svg {
    cursor: pointer;
  }
`;

const DropdownBox = styled.div`
  position: absolute;
  top: 120px;
  right: 95px;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <TopBar>
        <Link to="/intro">웹사이트 소개</Link>
        <Link to="/developer">개발자 소개</Link>
      </TopBar>
      <HeaderContainer>
        <Logo>
          <img src="../assets/logo.png" alt="스스LAW 로고" />
          <span>스스LAW</span>
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/about">법률정보</Link>
            </li>
            <li>Ai 상담</li>
            <li>
              <Link to="/introLawyer">변호사 소개</Link>
            </li>
            <li>자료실</li>
          </ul>
        </Nav>
        <Icons>
          <FaBars size={20} />
          <IoMdPerson size={20} onClick={toggleDropdown} />
          {isDropdownOpen && (
            <DropdownBox ref={dropdownRef}>
              <Link to="/login">로그인</Link>
            </DropdownBox>
          )}
        </Icons>
      </HeaderContainer>
    </>
  );
};

export default Header;
