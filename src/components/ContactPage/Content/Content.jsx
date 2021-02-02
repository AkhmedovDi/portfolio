import { Container } from "@material-ui/core";
import React from "react";
import styles from "./style.module.css";
import man from '../../images/ContactPage/man.png'
import facebook from '../../images/ContactPage/facebook.png'
import twitter from '../../images/ContactPage/twitter.png'
import instagram from '../../images/ContactPage/instagram.png'
function Content() {
  return (
    <div>
      <Container>
        <div className={styles.content}>
          <div className={styles.forms}>
            <h1>Message</h1>
            <form action="">
              <input type="name" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea
                name="comment"
                id=""
                // cols="67"
                // rows="4"
                placeholder="Message"
              ></textarea>
              <input type="submit" value="Send" className={styles.submit} />
            </form>
          </div>
          <div className={styles.person}>
              <div>
                    <h2>Alexandre <br/> Paiva</h2>
                    <div className={styles.phone}>
                        <span>PHONE</span>
                        <p>+1 (2345) 678-90-12</p>
                    </div>
                    <div className={styles.email}>
                        <span>EMAIL</span>
                        <p>support@personal.com</p>
                    </div>
                    <div className={styles.icons}>
                            <img src={facebook} alt=""/>
                            <img src={twitter} alt=""/>
                            <img src={instagram} alt=""/>
                        </div>
              </div>
              <img src={man} alt=""/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Content;
