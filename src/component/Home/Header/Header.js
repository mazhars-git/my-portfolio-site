import React from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import NavMenu from '../NavMenu/NavMenu';
import './Header.css';

const Header = () => {
    return (
        <section className="header-area">
            <NavMenu></NavMenu>
            <HeaderContent></HeaderContent>
        </section>
    );
};

export default Header;