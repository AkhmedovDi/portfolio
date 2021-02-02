import React from 'react';
import styles from './style.module.css'
import image1 from '../../images/HomePage/Porfolio/image1.png'
import image2 from '../../images/HomePage/Porfolio/image2.png'
import image3 from '../../images/HomePage/Porfolio/image3.png'
import { Container } from '@material-ui/core';

function RelaitedWork() {
    return (
        <div>
            <Container>
           <div className={styles.text}>
           <h2>Related Work</h2>
            <p>Apparently we had reached a great height in the <br/> atmosphere, for the sky was a dead black.</p>
           </div>
            <div className={styles.images}>
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
            </div>
            </Container>
        </div>
    );
}

export default RelaitedWork;