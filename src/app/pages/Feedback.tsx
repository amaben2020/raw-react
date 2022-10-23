import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Wizard from '../components/Wizard';
import usersInDb from './../../data/data.json';
import styles from './styles.module.css';

const Feedback = () => {
  const { id } = useParams();
  const [user, setUser] = useState<any>({});

  const { questions, users } = usersInDb;

  const Comp1 = () => {
    return <div>A</div>;
  };

  const Comp2 = () => {
    return <div>B</div>;
  };

  useEffect(() => {
    const info = users?.find((user) => user.id === id);
    setUser(info);
  }, [id]);
  console.log(questions);
  return (
    <div className={styles.wrapper}>
      <Card name={user.name} image={user.avatarUrl} id={user.id} />
      <Wizard>
        <Comp1 />
        <Comp2 />
      </Wizard>
    </div>
  );
};

export default Feedback;
