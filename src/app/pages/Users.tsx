import React from 'react';
import useCtx from '../hooks/useCtx';

const Users = () => {
  const { users } = useCtx();

  return <div>Users</div>;
};

export default Users;
