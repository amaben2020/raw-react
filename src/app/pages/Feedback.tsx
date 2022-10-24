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

  console.log(questions);

  //a. use switch case to render component that would render question
  //b. Set state or update an object with the answer for the user
  //c. create a dynamic key for a user's answer
  // d.   i.e [user.id] : {
  //            [q.id] : "selected input here"
  //            }

  const Comp1 = () => {
    return <div>A</div>;
  };

  const Comp2 = () => {
    return (
      <div>
        This wwould be the component, lets figure out how we would store the
        values
      </div>
    );
  };
  const Comp3 = () => {
    return (
      <div>
        This wwould be the component, lets figure out how we would store the
        values
      </div>
    );
  };
  const Comp4 = () => {
    return (
      <div>
        This wwould be the component, lets figure out how we would store the
        values
      </div>
    );
  };
  const Comp5 = () => {
    return (
      <div>
        This wwould be the component, lets figure out how we would store the
        values
      </div>
    );
  };
  const Comp6 = () => {
    return (
      <div>
        This wwould be the component, lets figure out how we would store the
        values
      </div>
    );
  };
  const Comp7 = () => {
    return (
      <div>
        This wwould be the component, lets figure out how we would store the
        values
      </div>
    );
  };

  useEffect(() => {
    const info = users?.find((user) => user.id === id);
    setUser(info);
  }, [id]);
  console.log(questions);
  return (
    <div className={styles.wrapper}>
      <Card name={user.name} image={user.avatarUrl} id={user.id} />
      <Wizard data={questions}>
        <Comp1 />
        <Comp2 />
        <Comp3 />
        <Comp4 />
        <Comp5 />
        <Comp6 />
        <Comp7 />
      </Wizard>
    </div>
  );
};

export default Feedback;
