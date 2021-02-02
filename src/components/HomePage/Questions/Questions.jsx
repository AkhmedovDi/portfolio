import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'
import icon from '../../images/HomePage/Questions/icon.png'
import icon1 from '../../images/HomePage/Questions/icon1.png'


function Questions() {
    const [active, setActive] = React.useState(false)
    
    const onActive = (index) => {
        setActive(index)
        setActive(!active)
    }
    return (
        
    <div >
        <Container>
            <div className={styles.text}> 
                <nav>F.a.q.</nav>
                <h2>Frequently Ask Questions</h2>
            </div> 

            <div className={styles.content}>
                <div
                    style={active ? {height: '200px'} : {height: '100px'}}
                 className={styles.item1}
                 onClick={onActive}
                 > 
                    <p> Sky was cloudless </p>
                     <img src={icon}  alt=""
                      className={active ? `${styles.rotated}` : `${styles.svg}`}/>
                    <span className={active ? `${styles.spans}` : `${styles.span1}`}>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float.</span>
                </div>    
                <div className={styles.item} > 
                    <p> Spectacle before us was indeed</p>
                     <img src={icon1} alt=""/>
                   
                </div>    
                <div className={styles.item} > 
                    <p> Came the night of the first </p>
                     <img src={icon1}  alt=""/>
                    
                </div>    
                <div className={styles.item}> 
                    <p> Their equipment and instruments </p> 
                    <img src={icon1}  alt=""/>
                    
                </div>    

            </div>                 
        </Container>
    </div>
    );
}

export default Questions;