import React, {useState, useEffect} from 'react'

import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';
import db from './firebase';

function Feed() {

  const [posts, setPost] = useState([]);
  useEffect(()=>{


  })
  return (
    <div className='feed'>
      
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      
    
      <TweetBox/>

      <Post
      displayname="Hubert Hartan"
      username="huberthartan"
      verified
      text="ITS WORKING"
      avatar="https://upload.wikimedia.org/wikipedia/commons/1/11/Canis_lupus_familiaris.002_-_Monfero.jpg"
      image="https://media4.giphy.com/media/IQxvdHgfat9ENGJbEm/giphy.gif?cid=ecf05e4755ffed6f1486a0063182c1ca521ed00a4629ad08&rid=giphy.gif&ct=g"
      />
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
    </div>
  )
}

export default Feed