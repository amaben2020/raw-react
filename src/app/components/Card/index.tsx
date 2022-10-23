import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles.module.css';
import { CardProps } from './types';

const Card = ({ id, name, image }: CardProps<string>) => {
  const images = !image ? 'https://via.placeholder.com/400x300' : image;

  return (
    <div className={style.card}>
      <img src={images} className={style.image} alt='' />
      <Link to={`/user/${id}`}>{name}</Link>
    </div>
  );
};

export default Card;
