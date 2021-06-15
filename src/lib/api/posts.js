import instance from '@lib/api/instance';

export const posts = () => instance.get('/posts');

export const post = (id) => instance.get(`/posts/${id}`);

export const writePost = ({ category_id, title, body }) => instance.post('/posts', { category_id, title, body });

export const deletePost = (id) => instance.delete(`/posts/${id}`);
