import React, { useState } from 'react';
import Header from '../components/Header';
import ChatDisplay from '../components/ChatDisplay';
import InputField from '../components/InputField';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);

    const handleSend = async (input) => {
        const newMessage = { text: input, isUser: true, time: new Date().toLocaleTimeString() };
        setMessages([...messages, newMessage]);
        const responseMessage = { text: 'Response from AI', isUser: false, time: new Date().toLocaleTimeString() };
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