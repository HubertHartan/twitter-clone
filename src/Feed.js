import React, {useState, useEffect} from 'react'

import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';
import {db} from './firebaseConfig';
//import firebase collection library here
//
function Feed() {

  const [posts, setPosts] = useState([]);

  //Investigate browser console logs and find the correct method of rendering posts
  useEffect(()=>{
    try{db.collection("posts").onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }catch(err){
    console.error(err);
  }},[])




  return (
    <div className='feed'>
      
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      
    
      <TweetBox/>

      {posts.map((post) => (
        <Post
        displayname={post.displayname}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        />
      ))}
      
    </div>
  )
}

export default Feed