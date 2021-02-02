import React from 'react';
import About from './About'
import Features from './Features';
import Footer from './Footer';
import Header from './Header'
import MyBlog from './MyBlog';
import Numbers from './Numbers';
import Portfolio from './Portfolio';
import Questions from './Questions';
import Service from './Service';
import Support from './Support';
import Testimonials from './Testimonials';
const index = () => {
    return (
        <div >
        <Header />
        <About />
        <Service />
        <Features />
        <Portfolio />
        <Numbers />
        <Testimonials />
        <Support />
        <Questions />
        <MyBlog />
        <Footer />
      </div>
    );
};

export default index;