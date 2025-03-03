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
        const response = await fetch('https://api.yourservice.com/endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`
            },
            body: JSON.stringify({ request: req.body.request })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('External API Error:', errorText);
            return res.status(response.status).json({ error: 'Failed to fetch from external API' });
        }

        const data = await response.json();
        res.status(200).json(data);

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('API Route Error:', errorMessage);
        res.status(500).json({ error: 'Failed to fetch AI response' });
    }
}