import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }

    const { region, inGameName } = req.body;
    const baseUrl = region === '1' ? 'https://mapleranks.com/u/' : 'https://mapleranks.com/u/eu/';
    const url = `${baseUrl}${inGameName}`;

    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        // Extract the information you need from the HTML
        const profileInfo = $('.card-body.text-center');

        res.status(200).json({ profileInfo });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching profile' });
    }
}
