import React from 'react';

const Comment = ({ comment, onCommentChange }) => {
  return (
    <div>
      <textarea value={comment} onChange={(e) => onCommentChange(e.target.value)} />
    </div>
  );
};

export default Comment;
