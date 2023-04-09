import styled from "styled-components";
// import { StyleProps } from "../interface/props";

export const TopNav = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
  z-index: 1000;
  img {
    height: 43px;
    width: 138px;
  }
  .hamburger {
    position: absolute;
    z-index: 99;
    right: 10%;
    display: none;
    flex-direction: column;
    gap: 0.2rem;
    transition: all 0.5s ease;
    span {
      background-color: #fefefe;
      width: 12px;
      height: 3px;
    }
    span.active {
      background-color: #0c0c0c;
    }
    .line1 {
      transition: transform 0.5s ease;
      background: #1f8ebe;
    }
    .line2 {
      width: 22px;
      transition: transform 0.5s ease;
      background: #ae61ed;
    }
    .line3 {
      align-self: flex-end;
      transition: transform 0.5s ease;
      background: #1f8ebe;
    }
  }
  .hamburger.active {
    gap: 0;
    span {
      width: 14px;
    }
    .line1 {
      transform: rotate(45deg);
    }
    .line2 {
      transform: rotate(-45deg);
      width: 22px;
    }
    .line3 {
      transform: rotate(45deg);
    }
  }
  .menu {
    display: flex;
    gap: 30px;
    a {
      text-decoration: none;
      color: white;
      font-weight: 600;
    }
  }
  @media (max-width: 768px) {
    img {
      width: 72px;
      height: 24px;
    }
    .hamburger {
      display: flex;
    }
    .menu {
      display: none;
    }
  }
`;

export const Hero = styled.div`
  margin-top: 180px;
  display: flex;
  position: relative;
  padding: 0 40px;
  gap: 65px;
  margin-bottom: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 30px;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .btn {
      width: fit-content;
    }
    .next {
      margin-top: 15px;
    }
  }
`;

export const Button = styled.div`
  background: linear-gradient(91.99deg, #1f8ebe 0%, #ae61ed 99.4%);
  box-shadow: 0px 17px 33px rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px !important;
    font-weight: 600 !important;
  }
`;

export const Header = styled.section`
  margin-bottom: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  main {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    form {
      display: flex;
      gap: 15px;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      button {
        width: fit-content;
      }
    }
  }
`;
export const FlexBox = styled.div`
  display: flex;
  gap: 50px;
  position: relative;
  width: fit-content;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SideBar = styled.div`
  position: fixed;
  top: 0%;
  height: 100vh;
  width: 100%;
  z-index: 900;
  transition: transform 0.6s ease;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(20px);
    height: 100vh;
    padding: 13px 0;
    background: linear-gradient(90.96deg, #1f8ebe 0.3 44.11%, #ae61ed 91.76%);
    gap: 26px;

    a {
      font-size: 13px;
      letter-spacing: 1.2px;
      font-weight: 600;
      text-decoration: none;
      color: #fefefe;
    }
    .active {
      color: #c0c0c0;
    }
  }
`;

export const Blur = styled.div`
  display: block;
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 499;
`;
