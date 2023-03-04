import React from 'react';
import './header.css';

const Header = () => (
    <nav className = 'navbar navbar-light bg-danger'>
        <div className='container-fluid'>
            <span className='navbar-brand mx-auto h1 text-center bg-danger text-white p-10px'>My React Blog</span>
        </div>
    </nav>
);

export { Header };
