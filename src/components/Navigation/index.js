import React, {useEffect} from 'react';

function Navigation(props) {

    const {
        selectedPage,
        setSelectedPage
    } = props;

    useEffect(() => {
        document.title = selectedPage;
    }, [selectedPage]);

    return (
        <nav>
            <ul>
                <li>
                    <span onClick={() => setSelectedPage('About')}>
                        About
                    </span>
                </li>
                <li>
                    <span onClick={() => setSelectedPage('Portfolio')}>
                        Portfolio
                    </span>
                </li>
                <li>
                    <span onClick={() => setSelectedPage('Contact')}>
                        Contact
                    </span>
                </li>
                <li>
                    <span onClick={() => setSelectedPage('Resume')}>
                        Resume
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;