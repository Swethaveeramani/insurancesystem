import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ChatbotMessage.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: 'How can I help you?', isUser: false },
  ]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleUserInput = (userText) => {
    const newMessage = { text: userText, isUser: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (!showButtons) {
      const chatbotResponse = { text: 'Sure, I can help with that.', isUser: false };
      setMessages((prevMessages) => [...prevMessages, chatbotResponse]);
      setShowButtons(true);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <div className="chat-icon-container">
        <img
          src="https://st4.depositphotos.com/9999814/41772/i/450/depositphotos_417720198-stock-photo-ai-robot-using-computer-to.jpg"
          alt="chat"
          style={{ width: '60px', height: '60px' }}
          onClick={toggleChat}
        />
      </div>
      <div className={`chat-modal ${isChatOpen ? 'open' : ''}`}>
        <div className="chat-container">
          <div className="chat-header">
            <h2>Chat with our Chatbot</h2>
            <button onClick={toggleChat}>Close</button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={message.isUser ? 'user' : 'chatbot'}>
                {message.text}
              </div>
            ))}
            {showButtons && (
              <div className="button-container" style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to="/About">
                  <button>About</button>
                </Link>
                <br />
                <Link to="/Premium">
                  <button>Premium</button>
                </Link>
                <br />
                <Link to="/Contact">
                  <button>Contact</button>
                </Link>
                <Link to="/Policy">
                  <button>Policy</button>
                </Link>
                <Link to="/Signup">
                  <button>Create Account</button>
                </Link>
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleUserInput(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
