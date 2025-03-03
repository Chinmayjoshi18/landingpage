import React from 'react';

const Message = ({ message }) => {
    return (
        <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-2 max-w-xs rounded-lg ${message.isUser ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}>
                <p>{message.text}</p>
                <span className="text-xs text-gray-500">{message.time}</span>
            </div>
        </div>
    );
};

export default Message;