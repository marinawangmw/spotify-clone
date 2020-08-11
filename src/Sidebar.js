import React from 'react';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useStateValue } from './StateProvider';
import './Sidebar.css';

const Sidebar = () => {
    const [{ playlists }, dispatch] = useStateValue();
    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="sidebar logo"/>
            <SidebarOption option="Home" Icon={HomeOutlinedIcon}/>
            <SidebarOption option="Search" Icon={SearchOutlinedIcon}/>
            <SidebarOption option="Your Library" Icon={LibraryMusicOutlinedIcon}/>
            
            <br/>
            <strong className="sidebar__option">PLAYLISTS</strong>
            <hr />
            {playlists ?.items?.map((playlist) => (
                <SidebarOption option={playlist.name} />
            ))} 
            

        </div>
    );
};

export default Sidebar;