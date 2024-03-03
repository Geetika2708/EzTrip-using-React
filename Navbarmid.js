import React from 'react';
import { Link } from 'react-router-dom';

function NavbarMid() {
    return (
        <div className="mid-navbar">
            <h6><Link to="/discover" target="_blank">Discover</Link></h6>
            <h6><Link to="/about" target="_blank">About</Link></h6>
            <h6><Link to="/contact" target="_blank">Contact us</Link></h6>
            <h6><Link to="/review" target="_blank">Review</Link></h6>
        </div>
    );
}

export default NavbarMid;
