import React from 'react';
import './Post.css';
import {Avatar} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
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
                <span>
                  <VerifiedUserIcon className='post__badge'/> @huberthartan
                </span>
              </h3>
            </div>

            <div className='post__headerDesc'>
              <p>
                I'm challenging myself to build a twitter clone.
              </p>
            </div>
          </div>
          <img src="https://media2.giphy.com/media/iJDJbzZcsLvCXm7RXf/giphy.gif?cid=ecf05e47592bd9f5c65ad38086d4125738953e9c833d4f1a&rid=giphy.gif&ct=s" alt="placeholder"/>
        </div>

    </div>
  )
}

export default Post