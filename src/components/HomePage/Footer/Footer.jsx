import { Container } from '@material-ui/core';
import React from 'react';
import Contact from '../Contact'
import styles from './style.module.css'
import image1 from '../../images/HomePage/Footer/image1.png'
import image2 from '../../images/HomePage/Footer/image2.png'
import image3 from '../../images/HomePage/Footer/image3.png'

function Footer() {
    return (
    <div>
    <Contact />
    <div className={styles.bgColor}>
    <Container>
        <div className={styles.content}>
            <div>
                <h2>PBP</h2>
                <p style={{fontSize: '20px'}}>+1 (2345) 678-90-12</p>
                <p>support@personal.com</p>
            </div>    
            <div>
                <nav>menu</nav>
                <p style={{marginTop: '40px'}}>About</p>
                <p>Portfolio</p>
            </div>
            <div style={{marginTop: '55px'}}>
                <p>Blog</p>
                <p>Contact</p>
            </div>
            <div>
                <nav>Subscribe</nav>
                <form action="" style={{marginTop: '20px'}}>
                    <input type="mail" placeholder='Your email'/> 
                    <input type="submit" value="Subsribe" className={styles.buttons}/>
                </form>
            </div>
        </div>  
        <div className={styles.line}>
            <div>
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
            </div>
            <p>© 2020 Laaqiq. All right reserved.</p>
        </div>
    </Container>
</div>
</div>
    );
}

export default Footer;