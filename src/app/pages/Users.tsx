//@ts-nocheck

import React from 'react';
import Card from '../components/Card';
import useCtx from '../hooks/useCtx';

import usersInDb from './../../data/data.json';

const Users = () => {
  const { users } = useCtx();

  // hey, add this to the global array on mount
  //TODO: add questions to the global object
  React.useEffect(() => {
    users.push(usersInDb.users);
  }, [users]);

  return (
    <div>
      {usersInDb.users.map(({ id, avatarUrl, name }) => (
        <Card key={id} id={id} image={avatarUrl} name={name} />
      ))}
    </div>
  );
};

export default Users;
