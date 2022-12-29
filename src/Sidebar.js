import React from 'react';

import SidebarOption from './SidebarOption';

import './Sidebar.css'


import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Button} from '@mui/material';


function Sidebar() {
  return (
    <div className="sidebar">
       
        <TwitterIcon/>


        <SidebarOption active Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={TagIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
        <SidebarOption Icon={EmailIcon} text="Messages"/>
        <SidebarOption Icon={BookmarkIcon} text="Bookmarks"/>
        <SidebarOption Icon={FormatListBulletedIcon} text="Lists"/>
        <SidebarOption Icon={PersonOutlineIcon} text="Profile"/>
        <SidebarOption Icon={MoreHorizIcon} text="More"/>
        
 
        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        
    </div>
  )
}

export default Sidebar