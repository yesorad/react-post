import React, {Fragment} from 'react';
import PostDetailContainer from '@containers/post/PostDetailContainer';
import CommentListContainer from '@containers/post/comment/CommentListContainer';

const postDetail = () => {
  return (
    <Fragment>
      <PostDetailContainer/>
      <CommentListContainer/>
    </Fragment>
  );
}

export default postDetail;