import React, { useState } from 'react';
import axios from 'axios';
import './CSS/chat.css';
import botAvatar from '../assets/chatbot.png';
import userAvatar from '../assets/farmer.png';


function Agribot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const message = {
      text: inputText,
      sender: 'user',
    };

    setMessages(prevMessages => [...prevMessages, message]);
    setInputText('');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://Vishwadeep17-agrotech.hf.space/chat', { text: inputText }, { headers: { Authorization: `Bearer ${token}` } });
      const botMessage = {
        text: response.data.message,
        sender: 'bot',
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="app">
      <div className="chat-container">
        <div className="chat">
          <div className="message bot">
            <p>Welcome! How can I help You?</p>
          </div>
          {messages.map((message, index) => (
            <div>
              <div key={index} className={`message ${message.sender}`}>
                <img src={message.sender === 'bot' ? botAvatar : userAvatar} alt={message.sender} className="avatar" />
                <div className="message-content">
                  <p>{message.text}</p>
                </div>
              </div>
            </div>
          ))}
          <div>
            <form onSubmit={sendMessage} className="input-container">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agribot;
