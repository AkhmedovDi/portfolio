import React from 'react';
import Footer from '../HomePage/Footer';
import Header from '../PortfolioPage/Header/HeaderCard'
import Content from './BlogContent/content'

const index = () => {
    return (
        <div>
            <Header pageName="Blog"
                links={[{title: "Home", path: "/"}, {title: "Blog", path: "/blog"}, ]}
            />
            <Content />
            <Footer />
        </div>
    );
};

export default index;