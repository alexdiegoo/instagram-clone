import React from 'react';

import { FeedContentStyled, Header, UserAvatar, Image, Footer, IconsContainer, Comment } from './styles';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';

import Comments from '../Comments';


const FeedContent = ({ post }) => {
  const [showComments, setShowComments] = React.useState(false);
  function handleClick() {
    setShowComments(!showComments);
  }

  return (
    <FeedContentStyled>
      <Header>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <UserAvatar>
            <img src={post.avatar_url} />
          </UserAvatar>
          <p className="username">{post.username}</p>
        </div>
        <MoreHorizIcon fontSize="large" className="icon"/>
      </Header>
      <Image src={post.content.image} />
      <Footer>
        <IconsContainer>
          <div>
            <FavoriteBorderOutlinedIcon fontSize="large" className="icon" />
            <ModeCommentOutlinedIcon fontSize="large" className="icon" />
            <SendOutlinedIcon fontSize="large" className="icon" />
          </div>
          <BookmarkBorderSharpIcon fontSize="large" className="icon" />
        </IconsContainer>
        <p className="likes">Curtido por <strong>teste</strong> e <strong>outras pessoas</strong></p>
        <p className="description"><strong>{post.username}</strong> Esse é um exemplo de descrição da postagem</p>
        <p className="comments" style={{display: showComments ? 'none' : 'initial'}} onClick={handleClick}>Veja todos os {post.comments.length} comentários</p>
        <p className="time">há 2 horas</p>

        {showComments ? <Comments comments={post.comments} /> : null}

      </Footer>
        <Comment>
          <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
            <SentimentSatisfiedSharpIcon className="icon" />
            <textarea row="1" placeholder="Adicione um comentário..." />
          </div>
          <p className="publish-button">Publicar</p>
        </Comment>
    </FeedContentStyled>
  );
}

export default FeedContent;