import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'
import backImg from '../../images/HomePage/Service/Group.png'
import check from '../../images/HomePage/Service/check.png'
function Service() {
    return (
        <Container>
        <div className={styles.service}>
           
 <div className={styles.serviceInfo}>
     
           <nav> service </nav>
            <h2>Professional for <br /> Business Solution</h2>
            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p>
            <div>
            <div><img src={check} alt=""/> <span>Highly configurable and easy to setup </span></div>
            <div><img src={check} alt=""/> <span> Responsive and Mobile Friendly </span></div>
            <div> <img src={check} alt=""/> <span> Super Fast Customization </span></div>
            </div>
            <div className={styles.button}>Service</div>
</div>

  <img src={backImg} alt="" className={styles.backImg} />
        </div>
        </Container>


    );
}

export default Service;