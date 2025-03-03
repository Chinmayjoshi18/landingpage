// src/pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Set CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        // Handle preflight request
        if (req.method === 'OPTIONS') {
            return res.status(200).end();
        }

        const { request } = req.body;

        // Make the request to the external API
        const response = await fetch('https://trtirhzavg.execute-api.us-east-1.amazonaws.com/prod/generate-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`
            },
            body: JSON.stringify({ request })
        });

        if (!response.ok) {
            console.error('External API Error:', await response.text());
            return res.status(500).json({ error: 'Failed to fetch from external API' });
        }

        const data = await response.json();
        return res.status(200).json(data);

    } catch (error) {
        console.error('API Route Error:', error);
        return res.status(500).json({ error: 'Failed to fetch AI response' });
    }
}