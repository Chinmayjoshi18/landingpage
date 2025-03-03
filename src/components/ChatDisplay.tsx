import React from 'react';
import Message from './Message';

const ChatDisplay = ({ messages }) => {
    return (
        <div className="flex flex-col p-4 space-y-4">
            {messages.map((message, index) => (
                <Message key={index} message={message} />
            ))}
        </div>
    );
};

export default ChatDisplay;