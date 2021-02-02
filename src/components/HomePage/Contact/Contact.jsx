import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'

function Contact() {
    return (
        <div className={styles.bgImage}>
            <Container>
                <div className={styles.text}>
                    <h1>Contact If You Have Any Projects?</h1>
                    <p>Apparently we had reached a great height in the atmosphere</p>

                    <div className={styles.button}>
                        <div className={styles.contact}>Contact</div>
                        <div className={styles.about}>about</div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;