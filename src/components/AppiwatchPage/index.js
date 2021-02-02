import React from 'react';
import Header from '../PortfolioPage/Header/HeaderCard'
import Footer from '../HomePage/Footer'
import ProjectDetails from './ProjectDetails';
import RelaitedWork from './RelaitedWork';
const index = () => {
    return (
        <div>
            <Header pageName="App for iWatch" 
                links={[{title: "Home", path: "/"}, {title: "Portfolio", path: "/Portfolio"}, {title: "App for iWatch", path: "/app"}]}
            />
            <ProjectDetails />
            <RelaitedWork />
            <Footer />
        </div>
    );
};

export default index;