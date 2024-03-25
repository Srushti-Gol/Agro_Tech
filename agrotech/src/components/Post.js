import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "./Comments";

const Post = ({ post }) => {
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Check if the current user has liked the post
    setLiked(post.ulikes.includes(user._id));
  }, [post.ulikes, user._id]);

  const handleLike = async () => {
    try{
    // Simulate local state update
    setLiked(!liked);
    const token = localStorage.getItem('token');
    await axios.post(
      'http://localhost:5000/likePost',
      {
        post_id: post._id,
        user_id: user._id, 
        action: liked ? 'unlike' : 'like',
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      } );
       // Handle the response if necessary
    } catch (error) {
      console.error('Error:', error);
    }
    
  };

  return (
    <div className="post">
      <div className="post-container">
        <div className="post-user">
          <div className="userInfo">
            {post.profilePic && (
              <img
                src={`data:image/jpeg;base64,${post.profilePic}`}
                alt="Profile"
              />
            )}
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">@{post.username}</span>
              </Link>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.caption}</p>
          {post.post_pic_data && (
            <img
              src={`data:image/jpeg;base64,${post.post_pic_data}`}
              alt="Post"
            />
          )}
        </div>
        <div className="info">
          <div className="item" onClick={handleLike}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {post.likes} Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            {post.comments} Comments
          </div>
        </div>
        {commentOpen && <Comments postId={post._id} userId={user._id}/>}
      </div>
    </div>
  );
};

export default Post;
