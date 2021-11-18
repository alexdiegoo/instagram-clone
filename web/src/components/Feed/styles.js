import styled, { keyframes } from "styled-components";

export const FeedStyled = styled.div`
  max-width: 614px;
  min-width: 310px;
  margin: 20px auto;

  & #endScroll {
    width: 100px;
    height: 20px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.secondaryText};
  border-top: 3px solid ${({ theme }) => theme.primaryText};
  margin: 0 auto;
  animation: ${rotate} 2s linear infinite;
`;