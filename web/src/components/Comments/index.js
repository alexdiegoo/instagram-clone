import React from 'react';

import { CommentsStyled, Comment } from './styles';

const Comments = ({ comments }) => {

  console.log(comments)
  return (
    <CommentsStyled>
      {comments.map((comment, index) => {
        return (
          <Comment>
            <p><strong>{comment.user}</strong></p>
            <p>{comment.comment}</p>
          </Comment>
        )
      })}
    </CommentsStyled>
  )
}

export default Comments;
