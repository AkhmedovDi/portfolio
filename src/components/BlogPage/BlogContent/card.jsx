import React from 'react';
import styles from './style.module.css'


function Card({img, description, text}) {
    return (
        <div className={styles.cards}>
            <img src={img} alt=""/>
            <p>{description}</p>
            <span>{text}</span>
        </div>
    );
}

export default Card;