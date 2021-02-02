import React from 'react';
import HeaderCard from './HeaderCard';

function Header() {
    return (
        <div>
            <HeaderCard 
                pageName='Portfolio'
                links={[{title: "Home", path: "/"}, {title: "Portfolio", path: "/Portfolio"}, {title: "qwe", path: "/qwe"}]}
            />
        </div>
    );
}

export default Header;