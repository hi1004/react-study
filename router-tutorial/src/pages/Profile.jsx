import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  user1: {
    name: 'hi1004',
    description: 'FE devloper',
  },
  user2: {
    name: 'kipo',
    description: 'BE devloper',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <h2>{profile.description}</h2>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
