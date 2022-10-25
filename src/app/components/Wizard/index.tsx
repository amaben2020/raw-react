import React, { useEffect, useState } from 'react';
import useCtx from '../../hooks/useCtx';
import styles from './styles.module.css';

const Wizard = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: any;
}) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [pointer, setPointer] = useState(0);
  const [q, setQ] = useState([]);

  const { state, dispatchQuestions } = useCtx();

  useEffect(() => {
    dispatchQuestions();
    setQ(state);
  }, []);

  console.log(q);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const Components = React.Children.toArray(children);

  const CHILDREN_LENGTH = React.Children.toArray(children).length - 1;

  const handlePageUpdate = (direction: string) => {
    switch (direction) {
      case 'PREV': {
        return pointer >= 0 && setPointer((prev) => prev - 1);
      }
      case 'NEXT': {
        return setPointer((next) => next + 1);
      }

      default:
        return pointer;
    }
  };

  return (
    <div className={styles.card}>
      <div>
        {Components[pointer]}
        <button
          disabled={pointer === 0}
          onClick={() => handlePageUpdate('PREV')}
        >
          {' '}
          Prev
        </button>
        <button
          disabled={pointer === CHILDREN_LENGTH}
          onClick={() => handlePageUpdate('NEXT')}
        >
          {' '}
          Next
        </button>
      </div>

      {data[pointer].label}
      {data[pointer].type === 'scale' ? 'yes' : 'no'}
    </div>
  );
};

export default Wizard;
