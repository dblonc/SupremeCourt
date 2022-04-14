import React from 'react';
import './header.scss'

class Header extends React.Component { 

    render() {
        return (
            <div className = "header-container">
                <div className="header">
                    <span className="header-text">ArbiLex Frontend Exercise</span>
                </div>
            </div>
        )
    }


}
    
export default Header;