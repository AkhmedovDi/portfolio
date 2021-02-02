import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'
import Icon1 from '../../images/HomePage/Features/icon1.png'
import Icon2 from '../../images/HomePage/Features/icon2.png'
import Icon3 from '../../images/HomePage/Features/icon3.png'
function Features() {
    return (
        <div style={{marginTop: '254px'}}>
        <Container>  
            <div className={styles.text}>
                <nav>features</nav>
                <h2> Awesome <br/> Customer Service</h2>
                <p>Apparently we had reached a great height in the atmosphere, <br/> for the sky was a dead black.</p>
            </div>
            <div className={styles.content}>
                <div> <img src={Icon1} alt=""/>
                <h5>Design</h5>
                <span>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</span>
                <p>Learn More</p>
                </div>
                <div> <img src={Icon2} alt=""/>
                <h5>Prototype</h5>
                <span>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</span>
                <p>Learn More</p>
                </div>
                <div> <img src={Icon3} alt=""/>
                <h5>Develop</h5>
                <span>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</span>
                <p>Learn More</p>
                </div>
            </div>
        </Container>
        </div>
    );
}

export default Features;