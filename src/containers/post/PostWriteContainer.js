import React, { useCallback, useEffect, useState } from 'react';
import * as postsAPI from '@lib/api/posts';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '@modules/write';
import PostWrite from '@components/post/PostWrite';
import { initializeForm } from '../../modules/auth';
import { withRouter } from 'react-router-dom';

function PostWriteContainer({ history }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { form } = useSelector(({ write }) => ({
    form: write.postWrite,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'postWrite',
        key: name,
        value,
      }),
    );
  };

  const handlePostWrite = async ({ category_id, title, body }) => {
    setLoading(true);
    try {
      await postsAPI.writePost({ category_id, title, body });
      setSuccess(true);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const onSubmit = useCallback((e) => {
    const { category_id, title, body } = form;
    e.preventDefault();

    if ([title, body].includes('')) {
      alert('빈 칸을 모두 입력하세요.');
      return;
    }

    handlePostWrite({ category_id, title, body });
  });

  useEffect(() => {
    dispatch(initializeForm('postWrite'));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      if (error.response.status === 400) {
        alert('인증 에러입니다.');
        return;
      }
      console.log(error);
      return;
    }
    if (success) {
      alert('게시글 작성 성공');
      history.push('/posts');
    }
  }, [success, error, history]);

  if (loading) return <div>로딩중...</div>;
  return <PostWrite form={form} onChange={onChange} onSubmit={onSubmit} />;
}

export default withRouter(PostWriteContainer);
