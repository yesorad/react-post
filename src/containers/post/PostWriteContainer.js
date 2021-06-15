import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '@modules/write';
import PostWrite from '@components/post/PostWrite';

function PostWriteContainer() {
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
  return <PostWrite form={form} onChange={onChange} />;
}

export default PostWriteContainer;
