import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'
import backImg from '../../images/HomePage/About/Group.png'

function About() {
    return (
        <Container>
        <div className={styles.about}>
            <img src={backImg} alt="" className={styles.backImg}/>
   
        <div style={{width: '450px', marginTop: '50px'}}>
            <nav>
                About
            </nav>
            <h2>Passion, <br/>Heart & Soul</h2>
            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p>
            <span>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float.</span>
            <div className={styles.button}>About</div>
        </div>   
        </div>
        </Container>  
    );
}

export default About;