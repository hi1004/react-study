import { useDispatch, useSelector } from 'react-redux';
import DataDisplay from './DataDisplay';
import { fetchUsers, selectUser } from '../store/reducers/fetchSlice';
import { useEffect } from 'react';

const Users = () => {
  const users = useSelector(state => state.fetch.data.users);
  const usersLoading = useSelector(state => state.fetch.loading);
  const error = useSelector(state => state.fetch.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserClick = userId => {
    dispatch(selectUser(userId));
  };

  const renderUsers = userList =>
    userList && (
      <section>
        <h1>사용자 목록</h1>
        <ul>
          {userList.map(user => (
            <li key={user.id} onClick={() => handleUserClick(user.id)}>
              {user.username}{' '}
            </li>
          ))}
        </ul>
      </section>
    );

  return (
    <DataDisplay
      data={users}
      loading={usersLoading}
      error={error}
      renderData={renderUsers}
    />
  );
};

export default Users;
