import React from 'react';
import Bannar from './Bannar';
import Deals from './Deals';
import Info from './Info';
import Subscribe from './Subscribe';
import Table from './Table';
import Women from './Women';

const Home = () => {
    return (
        <div>
            <Bannar/>
            <Info/>
            <Deals/>
            <Table/>
            <Women/>
            <Subscribe/>
        </div>
    );
};

export default Home;