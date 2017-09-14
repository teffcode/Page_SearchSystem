import React from 'react';

import '../styles/MenuTop.css'

const MenuTop = ({items}) => (
    <ul className="menu__list">
        {
            items.map(item => {
                return(
                <li className="menu__items">
                    <a>{item.title}</a>
                </li>
                )
            })
        }
    </ul>
);

export default MenuTop;