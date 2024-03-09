import React from 'react'
import './CSS/community.css'
import userAvatar from '../assets/user-avatar.png';
import Post from './Post';

const posts = [
  {
    id: 1,
    name: "John Doe",
    userId: 1,
    profilePic:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://img.freepik.com/free-photo/green-meadow-meanders-into-wheat-field-horizon-generated-by-ai_188544-36101.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    userId: 2,
    profilePic:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
  },
];


function Community() {
  return (
    <div>
      <div className="community">
        <div className="left-panel">
          <div className="profile-photo">
            <img src={userAvatar} alt="User Avatar" className='profilephoto' />
            <h4>User Name</h4>
            <button className="btn-primary">Edit Profile Photo</button>
            <button className="btn-primary">Add Post</button>
          </div>
        </div>
        <div className="right-panel">
          <div className="posts">
            {posts.map(post => (
              <Post post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
