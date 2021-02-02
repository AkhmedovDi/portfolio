import { Container } from "@material-ui/core";
import React from "react";
import styles from "./style.module.css";
import afonso from "../../images/RedFlarePage/afonso.png";
import wim from "../../images/RedFlarePage/wim.png";
import henry from "../../images/RedFlarePage/henry.png";
function Comments(props) {
  return (
    <div>
      <Container>
        <h1 style={{color: '#333333'}}>3 Comments</h1>
        <div className={styles.comments}>
          <img src={afonso} alt="" />
          <div className={styles.items}>
            <div className={styles.person}>
              <div >
                <h5> Afonso Pinto </h5>
                <span>Jan 12, 2020</span>
              </div>
              <p>REPLY</p>
            </div>
            <p>
              When she reached the first hills of the Italic Mountains, she had
              a last view back on the skyline of her hometown Bookmarksgrove
            </p>
          </div>
        </div>
        <div className={styles.comments}>
          <img src={wim} alt="" />
          <div className={styles.items}>
            <div className={styles.person}>
              <div >
                <h5> Wim Willems </h5>
                <span>Jan 12, 2020</span>
              </div>
              <p>REPLY</p>
            </div>
            <p>
              When she reached the first hills of the Italic Mountains, she had
              a last view back on the skyline of her hometown Bookmarksgrove
            </p>
          </div>
        </div>
        <div className={styles.comments} style={{width: '700px', marginRight:'230px'}}>
          <img src={henry} alt="" />
          <div className={styles.items}>
            <div className={styles.person}>
              <div >
                <h5> Henry Richardson</h5>
                <span>Jan 12, 2020</span>
              </div>
              <p>REPLY</p>
            </div>
            <p  style={{width: '600px'}}>
              When she reached the first hills of the Italic Mountains, she had
              a last view back on the skyline of her hometown Bookmarksgrove
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Comments;
