// src/pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { request } = req.body;

        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`
            },
            body: JSON.stringify({ request })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch from external API');
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('API Route Error:', error);
        res.status(500).json({ error: 'Failed to fetch AI response' });
    }
}