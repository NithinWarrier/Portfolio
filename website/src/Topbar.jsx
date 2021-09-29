import React from 'react';
import './Topbar.scss';

function Topbar() {
    return (
        <div className="topbar">
            <a className="topItems" href="/"> About </a>
            <a className="topItems" href="/"> Works </a>
            <a className="topItems" href="/"> Contact </a>
        </div>
    )
}

export default Topbar;
