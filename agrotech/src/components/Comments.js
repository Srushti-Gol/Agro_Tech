import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = ({ postId, userId, updateCommentCount }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const fetchComments = async () => {
    try {
      const response = await axios.get(`https://Vishwadeep17-agrotech.hf.space/getComments?postId=${postId}`);
      setComments(response.data.comments);
      updateCommentCount(response.data.comments.length);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleAddComment = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://Vishwadeep17-agrotech.hf.space/addComment',
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
      if (response.status === 200) {
        // Add the new comment to the comments state
        setNewComment('');
        fetchComments();
      } else {
        console.error('Failed to add comment:', response.data.error);
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
      {/* Display all comments */}
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
