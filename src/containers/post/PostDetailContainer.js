import React from 'react';
import { withRouter } from 'react-router-dom';
import * as postsAPI from '@lib/api/posts';

import PostDetail from '../../components/post/PostDetail';

import useAsync from '../../lib/api/Hooks/useAsync';

function PostDetailContainer({ match }) {
  const { postId } = match.params
  const [state] = useAsync(() => postsAPI.post(postId), [postId]);
  const { loading, data: item, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러..</div>
  if (!item) return null;
  console.log(item.data.post)
  return (
    <PostDetail item={item.data.post} />
  );
}

export default withRouter(PostDetailContainer);