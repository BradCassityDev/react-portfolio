import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
    const {
        selectedPage,
        setSelectedPage
    } = props;
    return (
        <header>
            <h1>Brad Cassity</h1>
            <Navigation
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
        </header>
    );
}

export default Header;