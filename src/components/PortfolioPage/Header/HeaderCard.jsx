import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'
import { Link } from 'react-router-dom'
import Icon from '../../images/icon.png'

function HeaderCard({pageName, links = []}) {
    console.log(links)
    
    return (
        <div className={styles.backColor}>
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
                <div className={styles.text}>
                    <h1>{pageName}</h1>
                  <div className={styles.Links}>
                  {links.map((link, index) => {
                      return <>
                        {index === 0 ? '' : <img src={Icon} alt=""/>}
                        <Link to={link.path} key={link.path}> {link.title}  </Link> </>
                  })}
                  </div>
                </div>

            </Container>
        </div>
    );
}

export default HeaderCard;