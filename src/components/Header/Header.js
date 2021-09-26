import React from 'react';
import logo from '../../image/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="header">
                <img className='logo' src={logo} alt="" />
                <h1>Rajshahi University Teachers Salary</h1>
                <h5>Bellow are detailed salary data and charts based on salary surveys.</h5>
                <h1>Total Salary:5790000 BDT</h1>
            </div>
        </div>
    );
};

export default Header;