import React, { useState, useEffect } from 'react';
import './CSS/community.css';
import userAvatar from '../assets/user-avatar.png';
import Post from './Post';
import axios from 'axios';

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
  const [profilePic, setProfilePic] = useState('');
  const [formData, setFormData] = useState({
    profilePic: null,
  });
  const [loading, setLoading] = useState(false);

  const fetchProfilePic = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/profilePic', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'arraybuffer', // Specify response type as arraybuffer
      });
  
      // Convert the received binary data to base64 string
      const base64String = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
  
      // Set the base64 string as the profile picture
      setProfilePic(`data:image/jpeg;base64,${base64String}`);
    } catch (error) {
      console.error('Error fetching profile picture:', error);
    }
  };

  useEffect(() => {
    fetchProfilePic();
  }, [formData]); // Add formData as dependency

  const handleProfilePicChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleProfilePicUpload = async () => {
    try {
      setLoading(true);
      const formDataUpload = new FormData(); // Rename formData to formDataUpload
      formDataUpload.append('profilePic', formData.profilePic);
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/updateProfilePic', formDataUpload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      // Update profile picture state after successful upload
      fetchProfilePic(); // Call fetchProfilePic instead of setting profilePic directly
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      // Optional: You can show an error message to the user here.
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="community">
        <div className="left-panel">
          <div className="profile-photo">
            {profilePic ? (
              <img src={profilePic} alt="User Avatar" className="profilephoto" />
              ) : (
              <img src={userAvatar} alt="Default Avatar" className="profilephoto" />
              )}
            <h4>User Name</h4>
            <input type="file" onChange={handleProfilePicChange} name="profilePic" />
            <button className="btn-primary" onClick={handleProfilePicUpload}>
              {loading ? 'Uploading...' : 'Upload Profile Photo'}
            </button>
            <button className="btn-primary">Add Post</button>
          </div>
        </div>
        <div className="right-panel">
          <div className="posts">
            {posts.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
