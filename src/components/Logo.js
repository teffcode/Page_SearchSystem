import React from 'react';

import '../styles/Logo.css';

const Logo = () => (
    <div>
        <img src="https://www.cebroker.com/Content/images/logo-ceb-smallarrows-tablet.png" 
            style={{
                width:"140px", 
                height:'40px', 
                marginTop:'10px',
                position: 'absolute',
                left: '85px',
                top: '2px',
            }}/>
    </div>
);

export default Logo;