import React from 'react';
import Button from './Button';

const Header = () => {
    return (
        <header className="container">
            <nav>
                <ul>
                    <li>
                        <Button>Home</Button>
                    </li>
                    <li>
                        <Button>About</Button>
                    </li>
                    <li>
                        <Button>Contact</Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;