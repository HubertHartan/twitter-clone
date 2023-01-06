import React from 'react';
import './Post.css';
import {Avatar} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

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
                Hubert Hartan <span>
                  <VerifiedUserIcon className='post__badge'/>
                </span>
              </h3>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Post