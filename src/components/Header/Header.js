import React from 'react'
import './Header.css';
import icon from './first.svg';



const Header =({headTitle,headerExpanded})=>{
    return( 
        <div className="head-container">
        <img 
        src={icon}
        alt="HeaderImage" 
        className={`head-image ${
                    headerExpanded
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                }`}
                alt="headerImage"
            />
            <h1
                className={`head-text ${
                    headerExpanded
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                }`}
            >
                Guess It!
            </h1>
        </div>
    );
};

export default Header;

