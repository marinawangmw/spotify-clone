import React from 'react'; 
import Header from './Header';
import SongRow from './SongRow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useStateValue} from './StateProvider';
import './Body.css';

const Body = ({ spotify }) => {

    const [{ discoverWeekly }, dispatch ] = useStateValue();

    return (
        <div className='body'>
            <Header spotofy={spotify}/>
            <div className="body__info">
                <img 
                    src="./weeklyDiscovery.png" alt="list picture"/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discovery Weekly</h2>
                    <p>{discoverWeekly?.description}</p>
                </div>

            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {discoverWeekly?.tracks.items.map(item => (
                    <SongRow track={item.track}/>
                ))}
            </div>
        </div>
    );
};

export default Body;