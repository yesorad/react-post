import instance from '@lib/api/instance';

export const posts = () => instance.get('/posts');
