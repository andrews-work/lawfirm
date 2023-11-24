import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
    const headerStyle = {
        textDecoration: 'none',
        marginLeft: '10vw',
        color: 'black',
        textAlign: 'left',
        height: '15vh',
        display: 'flex',
        alignItems: 'center',
    };
    
    const h1Style = {
        color: '#2a2fbe',
    };
    
    return (
        <Link to="/" style={headerStyle} className="custom-container">
            <div className="row">
                <div className="d-flex flex-column justify-content-center">
                    <h1 className="no-indent" style={h1Style}>Amiry Svehla</h1>
                    <h2>Law & Migration</h2>
                </div>
            </div>
        </Link>
    );
}

export default Header;
