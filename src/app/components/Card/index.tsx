import React from 'react';

const Card = ({ name, cb }: { name: string; cb: any }) => {
  return <button onClick={cb}>{name}</button>;
};

export default Card;
