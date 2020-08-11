import React from 'react';
import './Footer.css';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__left">
                <p>Album and song details</p>
            </div>
            <div className="footer__center">
                <ShuffleRoundedIcon className="footer__green" />
                <SkipPreviousRoundedIcon className="footer__icon" />
                <PlayCircleOutlineOutlinedIcon 
                    style={{ fontSize: 22 }}
                    className="footer__icon"/>
                <SkipNextRoundedIcon className="footer__icon" />
                <RepeatRoundedIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <p>Volume Controls</p>
            </div>
        </div>
    );
}; 

export default Footer;