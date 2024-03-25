import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const Comments = ({ postId, userId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getComments?postId=${postId}`);
        setComments(response.data.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleAddComment = async () => {
    try {
      const token = localStorage.getItem('token');
      // console.log(userId);
      // console.log(postId);
      const response = await axios.post(
        'http://localhost:5000/addComment',
        {
          post_id: postId,
          user_id: userId, 
          comment_text: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        setComments([
          ...comments,
          { id: comments.length + 1, desc: newComment, name: 'You', user_id: userId },
        ]);
        setNewComment('');
      } else {
        console.error('Failed to add comment:', data.error);
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className="comments">
      <div className="write">
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="btn-primary" onClick={handleAddComment}>
          Send
        </button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          {/* Display user's profile picture */}
          {comment.profilePicture && (
            <img
              src={`data:image/jpeg;base64,${comment.profilePicture}`}
              alt="Comment"
            />
          )}
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.comment_text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;