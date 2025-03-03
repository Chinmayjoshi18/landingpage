// src/components/ConfidenceBar.tsx
import React from 'react';

interface ConfidenceBarProps {
    score: number;
}

const ConfidenceBar: React.FC<ConfidenceBarProps> = ({ score }) => {
    return (
        <div className="w-full bg-gray-200 h-2 rounded">
            <div
                className="bg-green-500 h-2 rounded"
                style={{ width: `${score}%` }}
            />
        </div>
    );
};

export default ConfidenceBar;