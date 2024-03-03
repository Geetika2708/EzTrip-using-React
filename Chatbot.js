import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setError('Please enter a message.');
      return;
    }
    // Clear any previous error
    setError('');

    const userMessage = { text: inputValue, sender: 'user' };
    setMessages([...messages, userMessage]);

    // Simulate bot response
    const botMessage = { text: 'Hello! This is a simple bot response.', sender: 'bot' };
    setTimeout(() => {
      setMessages([...messages, botMessage]);
    }, 500); // Simulating bot response delay

    setInputValue('');
  };

  return (
    <div className="chatbot">
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="message-form">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          rows={4} // Adjust the number of rows as needed for the desired box size
          cols={30} // Adjust the number of columns as needed
        />
        <button type="submit">Send</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Chatbot;
