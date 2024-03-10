import React, { useState, useEffect, useContext } from 'react';
import './CSS/community.css';
import userAvatar from '../assets/user-avatar.png';
import Post from './Post';
import axios from 'axios';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { AuthContext } from './AuthContext';
import Image from "../assets/img.png";
import Map from "../assets/map.png";
import Friend from "../assets/friend.png";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

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
  const { user } = useContext(AuthContext);
  const [profilePic, setProfilePic] = useState('');
  const [formData, setFormData] = useState({
    profilePic: null,
  });
  const [formDataPost, setFormDataPost] = useState({
    PostImg: null,
  });
  const [loading, setLoading] = useState(false);
  const [openPost, setOpenPost] = React.useState(false);

  const handleClickOpenPost = () => {
    setOpenPost(true);
  };
  const handleClosePost = () => {
    setOpenPost(false);
  };

  const [openProfile, setOpenProfile] = React.useState(false);

  const handleClickOpenProfile = () => {
    setOpenProfile(true);
  };
  const handleCloseProfile = () => {
    setOpenProfile(false);
  };

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

  const handlePostChange = (e) => {
    const { name, files } = e.target;
    setFormDataPost({
      ...formDataPost,
      [name]: files[0],
    });
  };

  const handleUplodePost = () => {

  }
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
      setOpenProfile(false);
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
            <h4>{user.name}</h4>
            <button variant="outlined" className="btn-primary" onClick={handleClickOpenProfile}>
              Edit Profile Photo
            </button>
            <BootstrapDialog
              onClose={handleCloseProfile}
              aria-labelledby="customized-dialog-title"
              open={openProfile}
            >
              <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Edit Profile Photo
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleCloseProfile}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent dividers>
                <Typography gutterBottom>
                  <input type="file" onChange={handleProfilePicChange} name="profilePic" className='form-control' />
                </Typography>
                <Typography gutterBottom>
                  {formData.profilePic && (
                    <img src={URL.createObjectURL(formData.profilePic)} alt="Chosen Image" style={{ maxWidth: '100%', marginTop: '10px' }} />
                  )}
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button className="btn-primary" onClick={handleProfilePicUpload}>
                  {loading ? 'Uploading...' : 'Upload Profile Photo'}
                </Button>
              </DialogActions>
            </BootstrapDialog>
            <button variant="outlined" className="btn-primary" onClick={handleClickOpenPost}>
              Add Post
            </button>
            <BootstrapDialog
              onClose={handleClosePost}
              aria-labelledby="customized-dialog-title"
              open={openPost}
            >
              <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Add Post
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClosePost}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent dividers>
                <Typography gutterBottom>
                  <div className="share">
                    <div className="share-container">
                      <div className="share-top">
                        {profilePic ? (
                          <img src={profilePic} alt="" />
                        ) : (
                          <img src={userAvatar} alt="" />
                        )}
                        <input type="text" placeholder={`What's on your mind ${user.name}?`} />
                      </div>
                      <hr />
                      <div className="share-bottom">
                        <div className="share-left">
                          <input type="file" id="file" onChange={handlePostChange} name='PostImg' style={{ display: "none" }} />
                          <label htmlFor="file">
                            <div className="share-item">
                              <img src={Image} alt="" />
                              <span>Add Image/Video</span>
                            </div>
                            {formDataPost.PostImg && (
                              <img src={URL.createObjectURL(formDataPost.PostImg)} alt="Chosen Image" style={{ maxWidth: '100%', marginTop: '10px' }} />
                            )}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button className="btn-primary" onClick={handleUplodePost}>
                  Share
                </Button>
              </DialogActions>
            </BootstrapDialog>
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
