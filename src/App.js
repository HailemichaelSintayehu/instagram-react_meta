import React,{useState, useEffect} from "react";
import "./App.css";
import Post from "./Post.js";
import {db} from "./Firebase"
function App() {
  const [posts, setPosts] = useState([]);
  // useEffect(() =>{
 
  // },[]);
   //   db.collection('posts').onSnapshot(snapshot =>{
  //     setPosts(snapshot.docs.map(doc => doc.data()));
  //   })
     async function getCities() {
      const citiesCol = collection(db, 'posts');
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map(doc => doc.data());
      return cityList;
    }
  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>Hello, Today we build Instagram clone </h1>
      {posts.map((post) => {
        <Post
          username={post.username}
          imageUrl = {post.image}
          caption={post.caption}
         />;
      })}
    </div>
  );
}

export default App;
