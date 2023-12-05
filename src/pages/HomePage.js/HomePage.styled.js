import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Title = styled.h1`
  font-size: 44px;
  margin-top: 200px;
  animation: ${slideInLeft} 1s ease-in-out;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-top: 50px;
  text-align: center;
`;
