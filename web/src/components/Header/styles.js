import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 6rem;
  padding: 1.2rem 0;
  background-color: ${({ theme }) => theme.secondaryBackground};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  
  & .logo {
    & > path {
      fill: ${({ theme }) => theme.logo};
    }
  }
`;

export const InputContainer = styled.div`
  max-width: 200px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.primaryBackground};
  padding: 0.5rem 1.2rem;

  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  & > .icon {
    color: ${({ theme }) => theme.secondaryText};
  }

  & > input {
    border: none;
    outline: none;
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.secondaryText};
      font-weight: 300;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  & > .icon {
    color: ${({ theme }) => theme.logo};
    cursor: pointer;
  }
`;

export const UserAvatar = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  overflow: hidden;

  & > img {
    width: 100%;
  }
`;

export const ChangeTheme = styled.input`
  width: 2rem;
`;