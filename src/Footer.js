import React from 'react';
import './Footer.css';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img className='footer__albumLogo' src="https://upload.wikimedia.org/wikipedia/en/2/2e/Usher-yeah.jpg" alt="album foto"/>
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleRoundedIcon className="footer__green" />
                <SkipPreviousRoundedIcon className="footer__icon" />
                <PlayCircleOutlineOutlinedIcon 
                    fontSize="large"
                    className="footer__icon"/>
                <SkipNextRoundedIcon className="footer__icon" />
                <RepeatRoundedIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer__icon" />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer__icon" />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}; 

export default Footer;