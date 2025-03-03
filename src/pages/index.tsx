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
        
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ request: input }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch AI response');
            }

            const data = await response.json();

            const responseMessage: Message = { 
                text: data.response, 
                isUser: false, 
                time: new Date().toLocaleTimeString() 
            };

            setMessages((prev) => [...prev, responseMessage]);
        } catch (error) {
            console.error('Error fetching AI response:', error);
        }
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