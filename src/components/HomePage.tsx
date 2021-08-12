// imports
import React from 'react';
import TinderCards from './TinderCards';
import SwipeBtns from './SwipeBtns';
import Header from './Header';

// component
const HomePage: React.FC = () => {
    // template
    return (
        <>
            <Header />
            <TinderCards />
            <SwipeBtns />
        </>
    )
}

export default HomePage;
