import React from 'react';

const ChatbotMessage = ({ text, isUser }) => {
  return (
    <div className={`chat-message ${isUser ? 'user' : 'chatbot'}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatbotMessage;
