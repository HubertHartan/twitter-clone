import React from 'react';

import "./TweetBox.css";
import {Button} from '@mui/material';


function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>

            </div>

            <Button>
                Tweet
            </Button>
        </form>
    </div>
  )
}

export default TweetBox