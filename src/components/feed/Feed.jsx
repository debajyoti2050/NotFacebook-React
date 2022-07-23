import "./feed.css";
import {useState} from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import { useEffect } from "react";
import axios from "axios";
// import {Posts} from '../../dummyData'

export default function Feed({username}) {
  const [posts,setPosts]= useState([])

  useEffect(()=>{
    const fetchPosts= async()=>{
      const res= username
                 ?await axios.get("/posts/profile/"+ username)
                 : await axios.get("posts/timeline/627440ff4be1a337727ef8f9");
      setPosts(res.data)
    }
    fetchPosts();

  },[username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {/* {Posts.map(p=>(
          <Post key={p.id} post={p}/>
        ))} */}

        {
        posts.map(p=>(
          <Post key={p._id} post={p}/>
        ))
        }

      </div>
    </div>
  )
}
