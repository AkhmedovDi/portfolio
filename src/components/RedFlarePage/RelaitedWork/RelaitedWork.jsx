import React from 'react';
import styles from './style.module.css'
import image1 from "../../images/HomePage/MyBlog/image1.png";
import image2 from "../../images/HomePage/MyBlog/image2.png";
import image3 from "../../images/HomePage/MyBlog/image3.png";

import { Container } from '@material-ui/core';

function RelaitedWork() {
    return (
        <div>
            <Container>
           <div className={styles.text}>
           <h2>Related Articles</h2>
            <p>Apparently we had reached a great height in the <br/> atmosphere, for the sky was a dead black.</p>
           </div>
           <div className={styles.images}>
                <div><img src={image1} alt=""/>
                    <p>Red flare silhouetted</p>
                    <span>By the same illusion which lifts the horizon of the sea to the level of the spectator</span>
                </div>
                <div>
                    <img src={image2} alt=""/>
                    <p>Watched the storm</p>
                    <span>By the same illusion which lifts the horizon of the sea to the level of the spectator</span>
                </div>
               
                <div>
                <img src={image3} alt=""/>
                <p>Shining crescent far beneath</p>
                <span>By the same illusion which lifts the horizon of the sea to the level of the spectator</span>
                </div>
            </div>
            </Container>
        </div>
    );
}

export default RelaitedWork;