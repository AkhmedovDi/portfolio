import React from 'react';
import Header from '../PortfolioPage/Header/HeaderCard'
import Footer from '../HomePage/Footer'
import Content from './Content';
const index = () => {
    return (
        <div>
            <Header pageName='Contact'/>
            <Content />
            <Footer />
        </div>
    );
};

export default index;