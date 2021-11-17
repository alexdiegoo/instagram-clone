import styled from "styled-components";

export const FeedContentStyled = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.secondaryBackground};
`;

export const Header = styled.div`
  width: 100%;
  padding: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .username {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryText}
  }

  & .icon {
    color: ${({ theme }) => theme.primaryText}
  }
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 1rem;
  border-radius: 50%;
  overflow: hidden;

  & > img {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  min-height: 500px;
`;

export const Footer = styled.div`
  width: 100%;
  padding: 1.4rem;

  & .likes, & .description {
    color: ${({ theme }) => theme.primaryText};
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  & .comments, & .time {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 1.4rem;
    cursor: pointer;
  }

  & .time {
    text-transform: uppercase;
    font-size: 1rem;
    margin-top: 1.2rem;
  }
`;

export const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  & > div {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  & .icon {
    color: ${({ theme }) => theme.primaryText};
    cursor: pointer;
  }
`;

export const Comment = styled.div`
  width: 100%;
  padding: 1rem 1.4rem; 
  border-top: 1px solid ${({ theme }) => theme.border};

  display: flex;
  align-items: center;

  & textarea {
    margin-left: 1rem;
    resize: none;
    height: 20px;
    width: 60%;
    outline: none;
    border: none;
    background-color: transparent;
   }

  & textarea::placeholder {
    color: ${({ theme }) => theme.secondaryText};
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  & .icon {
    color: ${({ theme }) => theme.primaryText};
    cursor: pointer;
    font-size: 2.5rem
  }

  & .publish-button {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.linkText};
    font-weight: bold;
    opacity: 0.6;
    cursor: not-allowed;
  }
`;