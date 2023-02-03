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
            <Avatar  src="https://upload.wikimedia.org/wikipedia/commons/1/11/Canis_lupus_familiaris.002_-_Monfero.jpg"/>
        </div>

        <div className='post__body'>

          <div className='post__header'>
            
            <div className='post__headerText'>
              <h3>
                Hubert Hartan {" "}
                <span className="post__headerSpecial">
                  <VerifiedUserIcon className='post__badge'/> @huberthartan
                </span>
              </h3>
            </div>

            <div className='post__headerDesc'>
              <p>
                {text}
              </p>
            </div>
          </div>

          <img src="https://media4.giphy.com/media/IQxvdHgfat9ENGJbEm/giphy.gif?cid=ecf05e4755ffed6f1486a0063182c1ca521ed00a4629ad08&rid=giphy.gif&ct=g" alt="placeholder"/>

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