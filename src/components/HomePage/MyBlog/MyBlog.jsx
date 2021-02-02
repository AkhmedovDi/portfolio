import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'
import image1 from '../../images/HomePage/MyBlog/image1.png'
import image2 from '../../images/HomePage/MyBlog/image2.png'
import image3 from '../../images/HomePage/MyBlog/image3.png'

function MyBlog() {
    return (
        <div>
        <Container>
            <div className={styles.text}>
                <nav>My Blog</nav>
                <h2> My Personal Articles</h2>
                <div className={styles.port}>
                    <p>Apparently we had reached a great height in the <br/> atmosphere, for the sky was a dead black.
                    </p> 
                    <div className={styles.button}>Blog</div>
                </div>
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

export default MyBlog;