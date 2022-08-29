import react from 'react';
import './navbar.css';

export function Nav(){
    return (
        <div className='Navbar'>
            <ul>
                <li>Home</li>
                <li>News</li>
                <li>contact</li>
                <li>About</li>
            </ul>
        </div>
    );
}