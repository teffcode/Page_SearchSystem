import React from 'react';

import MenuTop from './MenuTop';
import items from '../data/itemsMenuTop';

import '../styles/NavbarTop.css';

const NavbarTop = () => (
    <div className="navbar">
        <MenuTop items={items}/>
    </div>
);

export default NavbarTop;