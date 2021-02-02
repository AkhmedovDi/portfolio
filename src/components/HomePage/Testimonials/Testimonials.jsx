import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'
import backImg from '../../images/HomePage/Testimonials/Group.png'
import image1 from '../../images/HomePage/Testimonials/Oval.png'
import image2 from '../../images/HomePage/Testimonials/image2.png'
import image3 from '../../images/HomePage/Testimonials/image3.png'

function Testimonials() {
    return (
        <Container>
        <div className={styles.about}>
            <img src={backImg} alt="" className={styles.backImg}/>
   
        <div style={{width: '450px', marginTop: '50px'}}>
            <nav>
            Testimonials
            </nav>
            <h2>What’s Client <br/> Say About Me</h2>
            <p>"By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle."</p>
            
         <div className={styles.item}> 
         <img src={image1} alt=""/>
         <div> <p> Nick Evans</p> <span>Developer</span> </div></div>
         <img src={image2} alt=""/>  <img src={image3} alt=""/>
        </div>   
        </div>
        </Container>  
    );
}

export default Testimonials;