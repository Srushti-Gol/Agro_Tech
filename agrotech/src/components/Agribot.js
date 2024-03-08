import React, { useState } from 'react';
import axios from 'axios';
import './CSS/chat.css' ;

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
            console.log(inputText);
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:5000/chat', { text: inputText }, { headers: {
                Authorization: `Bearer ${token}`
              }});
            const botMessage = {
              text: response.data.message,
              sender: 'bot',
            };
            setMessages(prevMessages => [...prevMessages, botMessage]); // Update messages using the previous state
        } catch (error) {
          console.error('Error sending message:', error);
        }
      };      
  
    return (
      <div className="app">
        <div className="chat-container">
          <div className="chat">
              <div className="message bot">
                <p>Welcome! ask your Question?</p>
              </div>
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <p>{message.text}</p>
              </div>
            ))}
          </div>
          <div >
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
    );
}

export default Agribot
