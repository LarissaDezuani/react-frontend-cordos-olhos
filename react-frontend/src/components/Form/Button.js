import React from 'react';
import styles from './Button.module.css';

const Button = ({children, onClick, type}) => {
  return(
    <>
        <button type={type} onClick={onClick} className={styles.btn}>{children}</button>
    </>
  );
};

export default Button;
