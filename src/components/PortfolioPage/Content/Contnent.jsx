import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'
import image1 from '../../images/PortfolioPage/Content/image1.png'
import image2 from '../../images/PortfolioPage/Content/image2.png'
import image3 from '../../images/PortfolioPage/Content/image3.png'
import image4 from '../../images/PortfolioPage/Content/image4.png'
function Contnent() {
    return (
    <div>
        <Container>
           <div className={styles.navs}>
                <ul>
                    <li className={styles.active}>All</li>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Mobile</li>
                    <li>Marketing</li>
                </ul>
            </div> 
            <div className={styles.contents}>
                <div><img src={image1} alt=""/> <img src={image2} alt=""/>
                <img src={image3} alt=""/> <img src={image4} alt=""/></div>
            </div>
            <ul className={styles.items}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </Container>
    </div>
    );
}

export default Contnent;