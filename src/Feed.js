import React, {useState, useEffect} from 'react'

import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';
import {db} from './firebaseConfig';
import {collection, addDoc} from 'firebase/firestore';

function Feed() {

  const [posts, setPosts] = useState([]);

  //Investigate browser console logs and find the correct method of rendering posts
  //incorrect and outdated methods used in current implementation
  
  
  /*postRef.onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map((doc) => doc.data()))
    );

    current implementation
  */



  const postRef = collection(db,"posts")
  //the mapping is the problem
 



  useEffect(()=>{
    try{postRef.onSnapshot((snapshot) =>
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