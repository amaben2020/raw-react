//@ts-nocheck

import React from 'react';
import useCtx from '../hooks/useCtx';

import usersInDb from './../../data/data.json';

const Users = () => {
  const { users } = useCtx();

  // hey, add this to the global array on mount
  React.useEffect(() => {
    users.push(usersInDb.users);
  }, [users]);

  console.log(users);

  return (
    <div>
      {usersInDb.users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <img src={user.avatarUrl} alt={user.name} />
        </div>
      ))}
    </div>
  );
};

export default Users;
