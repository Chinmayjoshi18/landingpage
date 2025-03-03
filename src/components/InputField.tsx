import React, { useState } from 'react';

const InputField = ({ onSend }) => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    return (
        <div className="flex p-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow p-2 border rounded-l"
                placeholder="ask your question"
            />
            <button
                onClick={handleSend}
                className="bg-gray-700 text-white p-2 rounded-r"
            >
                Send
            </button>
        </div>
    );
};

export default InputField;