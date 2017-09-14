import React from 'react';

import '../styles/MenuHeader.css';

const MenuHeader = ({items}) => (
    <ul>
        {
            items.map(item => {
                console.log(item.title)
                return(
                <li className="menu__header__items">
                    <a>{item.title}</a>
                </li>
                )
            })
        }
    </ul>
);

export default MenuHeader;