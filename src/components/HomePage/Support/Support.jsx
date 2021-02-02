import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'
import backImg from '../../images/HomePage/Support/Group.png'
import image1 from '../../images/HomePage/Support/image1.png'
import image2 from '../../images/HomePage/Support/image2.png'
import image3 from '../../images/HomePage/Support/image3.png'
import image4 from '../../images/HomePage/Support/image4.png'

function Support() {

    return (
        <div>
            <Container>
                <div className={styles.service}>

                    <div className={styles.serviceInfo}>

                        <nav> service </nav>
                        <h2>24/7 Hour <br /> Onine Supports</h2>
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p>

                        <div className={styles.items}>
                         <div>
                         <div className={styles.item}>
                                <img src={image1} alt="" />
                                <span> Communication  </span>
                                <span>experience</span> </div>

                            <div className={styles.item}>
                                <img src={image2} alt="" />
                                <span> Communication  </span>
                                <span>experience</span> </div>
                         </div>

                              <div> 
                                   <div className={styles.item}>
                                <img src={image3} alt="" />
                                <span> Communication  </span>
                                <span>experience</span> </div>

                            <div className={styles.item}>
                                <img src={image4} alt="" />
                                <span> Communication  </span>
                                <span>experience</span> </div>
                                </div>
                        </div>
                    </div>

                    <img src={backImg} alt="" className={styles.backImg} />
                </div>
            </Container>
        </div>
    );
}

export default Support;