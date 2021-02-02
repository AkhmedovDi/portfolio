import { Container } from '@material-ui/core';
import React from 'react';
import Card from './card'
import image from '../../images/HomePage/MyBlog/image1.png'
import image1 from '../../images/HomePage/MyBlog/image2.png'
import image2 from '../../images/HomePage/MyBlog/image3.png'
import styles from './style.module.css'

function content() {
    return (
        <div>
            <Container>
               <div className={styles.content}>
                    <Card 
                    img={image}
                    description="Red flare silhouetted"
                    text="By the same illusion which lifts the horizon of the sea to the level of the spectator"
                />
                    <Card 
                    img={image1}
                    description="Watched the storm"
                    text="By the same illusion which lifts the horizon of the sea to the level of the spectator"
                />
                    <Card 
                    img={image2}
                    description="Shining crescent far beneath"
                    text="By the same illusion which lifts the horizon of the sea to the level of the spectator"
                />
                    <Card 
                    img={image}
                    description="Red flare silhouetted"
                    text="By the same illusion which lifts the horizon of the sea to the level of the spectator"
                />
                    <Card 
                    img={image1}
                    description="Watched the storm"
                    text="By the same illusion which lifts the horizon of the sea to the level of the spectator"
                />
                    <Card 
                    img={image2}
                    description="Shining crescent far beneath"
                    text="By the same illusion which lifts the horizon of the sea to the level of the spectator"
                />
                    <Card 
                    img={image}
                    description="Red flare silhouetted"
                    text="By the same illusion which lifts the horizon of the sea to the level of the spectator"
                />
                    <Card 
                    img={image1}
                    description="Watched the storm"
                    text="By the same illusion which lifts the horizon of the sea to the level of the spectator"
                />
                    <Card 
                    img={image2}
                    description="Shining crescent far beneath"
                    text="By the same illusion which lifts the horizon of the sea to the level of the spectator"
                />
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

export default content;