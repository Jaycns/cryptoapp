import styled from "styled-components";
// import { StyleProps } from "../interface/props";

export const TopNav = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: center;
  gap: 707px;
  align-items: center;
  img {
    height: 43px;
    width: 138px;
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
`;

export const Hero = styled.div`
  margin-top: 180px;
  display: flex;
  position: relative;
  padding: 0 40px;
  gap: 65px;
  margin-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 622px;
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
    width: 1281px;
    form {
      display: flex;
      gap: 15px;
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
`;
