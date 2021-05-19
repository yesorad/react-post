import React from 'react';

import * as postsAPI from '@lib/api/posts';

import PostList from '@components/post/PostList';
import useAsync from '../../lib/api/Hooks/useAsync';

const PostListContainer = () => {
  const [state] = useAsync(postsAPI.posts, []);
  const { loading, data: items, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!items) return null;

  return <PostList items={items.data.posts} loading={loading} error={error} />;
};

export default PostListContainer;
