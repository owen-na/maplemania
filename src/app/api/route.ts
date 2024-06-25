import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';
import { NextRequest } from 'next/server';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     console.log(req.method);
//     if (req.method !== 'POST') {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//         return;
//     }

//     const { region, inGameName } = req.body;
//     const baseUrl = region === '1' ? 'https://mapleranks.com/u/' : 'https://mapleranks.com/u/eu/';
//     const url = `${baseUrl}${inGameName}`;
//     console.log(url);

//     try {
//         const response = await axios.get(url);
//         const html = response.data;
//         const $ = cheerio.load(html);

//         // Extract the information you need from the HTML
//         const profileInfo = $('.card-img-top');

//         res.status(200).json({ profileInfo });
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching profile' });
//     }
// }


export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body.name);
    // const { region, inGameName } = request.body;
    const baseUrl = 'https://mapleranks.com/u/'
    const url = `${baseUrl}${body.name}`;
    console.log(url);

    // region === '1' ? 'https://mapleranks.com/u/' : 'https://mapleranks.com/u/eu/';

    // try {
    //     const response = await axios.get(url);
    //     const html = response.data;
    //     const $ = cheerio.load(html);

    //     Extract the information you need from the HTML
    //     const profileInfo = $('.card-img-top');

    //     res.status(200).json({ profileInfo });
    // } catch (error) {
    //     res.status(500).json({ error: 'Error fetching profile' });
    // }
    const response = await fetch(url);
    // console.log(response.text());
    // cache for later 
    let text = await response.text();
    const regex = /<div class="card mb-2".+?img.+?char-stat-right.+?(?=alert alert-secondary py-2)(?=.*<\/ul> <\/div>)/g
    
    // /<div class="card mb-2".+?img.+?char-stat-right.+?(?=<div class="card mb-2")(?=.*<\/ul> <\/div>)/g
    // prev working regex

    const idCard = text.toString().match(regex);
    const idCardText = idCard? idCard[0] : "";
    return new Response(idCardText);
}

export async function GET(request: NextApiRequest) {
    return new Response("happy pride month :skull:");
}