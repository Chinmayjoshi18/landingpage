// src/pages/index.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import ChatDisplay from '../components/ChatDisplay';
import InputField from '../components/InputField';
import { Message } from '../types/ChatTypes';

const ChatPage = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSend = async (input: string) => {
        const newMessage: Message = { text: input, isUser: true, time: new Date().toLocaleTimeString() };
        setMessages([...messages, newMessage]);
        
        // Mock API response (Replace this with actual API call)
        const responseMessage: Message = { 
            text: 'Response from AI', 
            isUser: false, 
            time: new Date().toLocaleTimeString() 
        };
        
        setMessages((prev) => [...prev, responseMessage]);
    };

    return (
        <div className="flex flex-col h-screen bg-black text-white">
            <Header />
            <ChatDisplay messages={messages} />
            <InputField onSend={handleSend} />
        </div>
    );
};

export default ChatPage;