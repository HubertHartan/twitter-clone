import React from 'react';
import './Post.css';


import {Avatar} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

import { ImageSharp } from '@mui/icons-material';

function Post({
    avatar,
    displayname,
    username,
    verified,
    text,
    image,
    timestamp
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar  src={avatar}/>
        </div>

        <div className='post__body'>

          <div className='post__header'>
            
            <div className='post__headerText'>
              <h3>
                {displayname} {" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className='post__badge'/>} @{username}
                </span>
              </h3>
            </div>

            <div className='post__headerDesc'>
              <p>
                {text}
              </p>
            </div>
          </div>

          <img src={image} alt="placeholder"/>

          <div className='post__footer'>
            <ChatBubbleOutlineIcon fontSize="small"/>
            <RepeatIcon fontSize="small"/>
            <FavoriteBorderIcon fontSize="small"/>
            <PublishIcon fontSize="small"/>
          </div>

        </div>

    </div>
  )
}
//
export default Post