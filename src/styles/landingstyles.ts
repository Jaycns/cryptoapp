import styled from "styled-components";

export const TopNav = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
  align-items: center;
  img {
    height: 43px;
    width: 138px;
  }
  .menu {
    display: flex;
    gap: 30px;
    .menuitem{
        font-size: 16px;
        font-weight: 600;
    }
  }
`;
