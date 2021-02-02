import React from 'react';
import Header from '../PortfolioPage/Header/HeaderCard'
import Footer from '../HomePage/Footer'
import ProjectDetails from './ProjectDetails';
import RelaitedWork from './RelaitedWork';
const index = () => {
    return (
        <div>
            <Header pageName="App for iWatch" />
            <ProjectDetails />
            <RelaitedWork />
            <Footer />
        </div>
    );
};

export default index;