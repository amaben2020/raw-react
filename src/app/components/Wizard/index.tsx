import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const Wizard = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [pointer, setPointer] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  console.log(children);

  const Components = React.Children.toArray(children);
  console.log(Components[0]);
  return <div className={styles.card}>{children}</div>;
};

export default Wizard;
