import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { addMessage } from '../slices/chatSlice'; // Import the action creator from chatSlice

const socket = io();

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const messages = useSelector((state) => state.chat.messages);

  const dispatch = useDispatch(); // Create a dispatch function

  useEffect(() => {
    socket.on('chat message', (receivedMessage) => {
      dispatch(addMessage(receivedMessage)); // Add received message to Redux store
    });
  }, [dispatch]);


  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit('chat message', message);
      dispatch(addMessage(message)); // Dispatch the addMessage action to update Redux store
      setMessage('');
    }
  };

  return (
      <div>
        <div>
          {messages.map((msg, index) => (
              <p key={index}>{msg}</p>
          ))}
        </div>
        <div>
          <input type="text" value={message} onChange={handleMessageChange} />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
  );
};

export default ChatApp;
