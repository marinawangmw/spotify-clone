import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import './Header.css'

const Header = ({ spotify }) => {
    const [{ user }, dispatch ] = useStateValue();

    return (
        <div className='header'>
            <div className="header__left">
                <SearchOutlinedIcon />
                <input 
                    placeholder="Search for Artists, Songs or Album"
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <p>{user?.display_name}</p>

            </div>
        </div>
    );
};

export default Header;