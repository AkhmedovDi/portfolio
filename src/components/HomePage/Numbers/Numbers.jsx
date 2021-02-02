import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'
import image1 from '../../images/HomePage/Numbers/image1.png'
import image2 from '../../images/HomePage/Numbers/image2.png'
import image3 from '../../images/HomePage/Numbers/image3.png'

function Numbers() {
    return (
    <div  >
        <Container>
            <div className={styles.text}>
                <nav> Some numbers </nav>
                <h2>Completed 420+ Projects <br/> Last Year</h2>
            </div>

            <div className={styles.content}>
                <div>
                    <img src={image1} alt=""/>
                    <h2> 123k</h2>
                    <span> By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</span>
                </div>
                <div>
                    <img src={image2} alt=""/>
                    <h2> 45+</h2>
                    <span> By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</span>
                </div>
                <div>
                    <img src={image3} alt=""/>
                    <h2> 67%</h2>
                    <span> By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</span>
                </div>
            </div>
        </Container>
    </div>
    );
}

export default Numbers;