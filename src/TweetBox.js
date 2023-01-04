import React from 'react';

import "./TweetBox.css";
import {Avatar, Button} from '@mui/material';


function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/1/11/Canis_lupus_familiaris.002_-_Monfero.jpg"/>
                {/* Credits to https://upload.wikimedia.org/wikipedi
                a/commons/1/11/Canis_lupus_familiaris.002_-_Monfero.jpg for the hardcoded profile */}
                <input placeholder="What's happening?" type="text"/>
                {/* <input placeholder="Enter image URL" type="text"/> */}
            </div>

            <Button className='tweetBox__button'>
                Tweet
            </Button>
        </form>
    </div>
  )
}

export default TweetBox