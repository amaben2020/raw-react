//@ts-nocheck
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import usersInDb from './../../data/data.json';

const Feedback = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const info = usersInDb.users?.find((user) => user.id === id);
    setUser(info);
  }, [id]);

  console.log(user);

  return (
    <div>
      <Card name={user.name} image={user.avatarUrl} id={user.id} />
    </div>
  );
};

export default Feedback;
