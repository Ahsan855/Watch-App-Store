import React from 'react';
import Bannar from './Bannar';
import Deals from './Deals';
import Info from './Info';
import Women from './Women';

const Home = () => {
    return (
        <div>
            <Bannar/>
            <Info/>
            <Deals/>
            <Women/>
        </div>
    );
};

export default Home;