import React from 'react';
import Header from './Header/Header'
import UpComingOffer from './UpComingOffer/UpComingOffer'
import Shop from './Shop/Shop'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <UpComingOffer></UpComingOffer>
            <Shop></Shop>
        </div>
    );
};

export default Home;