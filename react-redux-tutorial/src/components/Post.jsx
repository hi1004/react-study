import { useSelector, useDispatch } from 'react-redux';
import DataDisplay from './DataDisplay';
import { fetchPost } from '../store/reducers/fetchSlice';
import { useEffect } from 'react';

const Post = () => {
  const post = useSelector(state => state.fetch.data.post);
  const postLoading = useSelector(state => state.fetch.loading);
  const selectUserId = useSelector(state => state.fetch.selectedUser);
  const dispatch = useDispatch();
  const error = useSelector(state => state.fetch.error);
  console.log(postLoading);
  const renderPost = postData =>
    postData && (
      <section>
        <h1>Post Data</h1>
        <div>
          <h2>Title: {postData.title}</h2>
          <p>Body: {postData.body}</p>
        </div>
      </section>
    );

  useEffect(() => {
    dispatch(fetchPost(selectUserId));
  }, [dispatch, selectUserId]);

  return (
    <DataDisplay
      data={post}
      loading={postLoading}
      error={error}
      renderData={renderPost}
    />
  );
};

export default Post;
