import React from 'react';
import useCtx from '../hooks/useCtx';

import usersInDb from './../../data/data.json';

const Users = () => {
  // const { users } = useCtx();

  // @ts-ignore
  // const allUsers = users.concat(usersInDb.users);

  return (
    <div>
      {usersInDb.users &&
        usersInDb.users.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <img src={user.avatarUrl} alt={user.name} />
          </div>
        ))}
    </div>
  );
};

export default Users;
