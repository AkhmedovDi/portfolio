import React from 'react';
import Header from '../PortfolioPage/Header/HeaderCard'
import Footer from '../HomePage/Footer'
import Content from './Content';
import Comments from './Comments';
import Forms from './Forms';
import RelaitedWork from './RelaitedWork';
const index = () => {
    return (
        <div>
            <Header pageName = "Red flare silhouetted"
                links={[{title: "Home", path: "/"}, {title: "Blog", path: "/blog"}, {title: "Red flare silhouetted", path: "/redflare"}]}
            />
            <Content />
            <Comments />
            <Forms />
            <RelaitedWork />
            <Footer />
        </div>
    );
};

export default index;