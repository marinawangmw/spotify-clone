import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import './Player.css';

const Player = ({ spotify }) => {
    return (
        <div className='player'> 
            <div className='player__body'>
                <Sidebar />
                <Body />
                <Footer />
            </div>
        </div> 
    );
};

export default Player;