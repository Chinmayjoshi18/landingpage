// src/components/ChatDisplay.tsx
import React from 'react';
import Message from './Message';
import { Message as MessageType } from '../types/ChatTypes';

interface ChatDisplayProps {
    messages: MessageType[];
}

const ChatDisplay: React.FC<ChatDisplayProps> = ({ messages }) => {
    return (
        <div className="flex flex-col p-4 space-y-4">
            {messages.map((message, index) => (
                <Message key={index} message={message} />
            ))}
        </div>
    );
};

export default ChatDisplay;