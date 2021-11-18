import styled from 'styled-components';

export const CommentsStyled = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const Comment = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;

  & p {
    color: ${({ theme }) => theme.primaryText};
    font-size: 1.2rem;
  }
`;