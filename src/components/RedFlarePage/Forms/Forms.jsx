import { Container } from '@material-ui/core';
import React from 'react';
import styles from './style.module.css'

function Forms(props) {
    return (
        <Container>
        <div className={styles.forms}>
           <h1>Leave a Comment</h1>
            <form action="">
                <input type="name" placeholder='Your Name'/>
                <input type="email" placeholder='Your Email'/>
                <textarea name="comment" id="" cols="67" rows="4" placeholder='Message'></textarea>
                <input type="submit" value="Submit" className={styles.submit}/>
            </form>
         
        </div>
        </Container>
    );
}

export default Forms;