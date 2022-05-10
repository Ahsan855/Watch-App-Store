import React from 'react';
import Bannar from './Bannar';
import Deals from './Deals';
import Info from './Info';

const Home = () => {
    return (
        <div>
            <Bannar/>
            <Info/>
            <Deals/>
        </div>
    );
};

export default Home;