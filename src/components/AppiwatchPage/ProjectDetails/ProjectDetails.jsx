import React from 'react';
import styles from './style.module.css'
import Container from '@material-ui/core/Container'
import image1 from '../../images/AppiwatchPage/image1.png'
import image2 from '../../images/AppiwatchPage/image2.png'
import image3 from '../../images/AppiwatchPage/image3.png'
import facebook from "../../images/AppiwatchPage/facebook.png";
import twitter from "../../images/AppiwatchPage/twitter.png";
import instagram from "../../images/AppiwatchPage/instagram.png";
function ProjectDetails() {
    return (
        <div>
            <Container>
                <div className={styles.content}>
                    <img src={image1} alt=""/>
                    <div>
                        <p className={styles.item}>Project Details</p>
                        <span> By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float.</span>
                        <nav style={{marginTop: '50px'}}>date</nav>
                        <p>16, Jan 2020</p>
                        <nav>client</nav>
                        <p>Microsoft</p>
                        <nav>categories</nav>
                        <p>Design</p>

                        <div className={styles.icons}>
                            <img src={facebook} alt=""/>
                            <img src={twitter} alt=""/>
                            <img src={instagram} alt=""/>
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <img src={image2} alt=""/>
                   
                </div>
                <div className={styles.content}>
                    <img src={image3} alt=""/>
            
                </div>
            </Container>
        </div>
    );
}

export default ProjectDetails;