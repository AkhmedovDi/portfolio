import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'
import personImage from '../../images/HomePage/Header/group1.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={styles.backImage}>
            <Container>
                <div className={styles.navbar}>
                   <Link to="/"> <h1>PBP</h1></Link>
                    <ul>
                        <Link to='app'><li>About</li></Link>
                        <Link to='portfolio'><li>Portfolio</li></Link>
                        <Link to='blog'><li>Blog</li></Link>
                        <Link to='contact'><li>Contact</li></Link>
                    </ul>
                   <Link to='contact'> <div>contact</div></Link>
                </div>
                <div className={styles.info}>
                    <div className={styles.personalInfo}>
                            <nav>Personal Portfolio </nav>
                            <h1>Design & Development</h1>
                            <p>The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime.</p>
                            <div className={styles.buttons} style={{marginRight: '50px'}}>About</div>
                           <Link to='redflare'> <div className={styles.buttons}>Learn More</div></Link>
                    </div>
                    <img src={personImage} alt=""/>
                </div>
            
            </Container>
        </div>
    );
}

export default Header;
