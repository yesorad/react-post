import instance from '@lib/api/instance';

export const posts = () => instance.get('/posts');

export const post = (id) => instance.get(`/posts/${id}`);
