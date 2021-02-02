import { Container } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.css'
import image1 from '../../images/RedFlarePage/image1.png'
import image2 from '../../images/RedFlarePage/image2.png'
import facebook from "../../images/AppiwatchPage/facebook.png";
import twitter from "../../images/AppiwatchPage/twitter.png";
import instagram from "../../images/AppiwatchPage/instagram.png";

function Content() {
    return (
    <div>
        <Container>
            <img src={image1} alt="" className={styles.image1}/>
            <div className={styles.text}>
                <h1>On deer horse</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                
                <h3>Overlaid the jeepers uselessly much excluding</h3>
                <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>

                <div className={styles.borderItem}>
                    <div>

                    </div>
                    <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
                    </p>
                </div>
                <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.</p>
                <h3>According a funnily until pre-set or arrogant well cheerful</h3>

                <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                
                <ul>
                    <li>So baboon this</li>
                    <li>Mounted militant weasel</li>
                    <li>Dear foresaw hungry</li>
                </ul>
                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                <img src={image2} alt="" style={{marginTop: '45px', marginBottom: '31px'}}/>
                <span className={styles.item}> This is a caption </span>
                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                <div className={styles.messangers}>
                        <span> Jan 12, 2020 </span>
                        <div className={styles.icons}>
                            <img src={facebook} alt=""/>
                            <img src={twitter} alt=""/>
                            <img src={instagram} alt=""/>
                        </div>
                </div>
                <div className={styles.line}></div>
            </div>
        </Container>
    </div>
    );
}

export default Content;