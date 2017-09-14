import React from 'react';

import Logo from './Logo';
import MenuHeader from './MenuHeader';
import items from '../data/itemsMenu';
import Button from './Button';

import '../styles/NavbarMain.css';

const NavbarMain = () => (
    <div className="navbar__main">
        <Logo/>
        <MenuHeader items={items}/>
        <Button/>
    </div>
);

export default NavbarMain;