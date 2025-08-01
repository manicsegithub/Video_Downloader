const express = require('express');
const cors = require('cors');
//const ytdl = require('ytdl-core');

const ytdl = require('@distube/ytdl-core');

const app = express();
app.use(cors({
    origin : ["https://video-downloader-backend.vercel.app"],
    methods : ["POST","GET"],
    credentials : true
}));
app.use(express.json());


app.get('/download', async (req, res) => {

    const videoURL = req.query.url;

    if (!ytdl.validateURL(videoURL)) {
        return res.status(400).json({ error: 'Invalid YouTube URL' });
    }

    const info = await ytdl.getInfo(videoURL);
    const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');

    res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);

    ytdl(videoURL, {
        format: 'mp4'
    }).pipe(res);
});

app.listen(5000, () => console.log('Server running on port 5000'));


//--------------------------------------------------------------------

// const express = require('express');
// const cors = require('cors');
// //const ytdl = require('ytdl-core');

// const ytdl = require('@distube/ytdl-core');

// const port = process.evn.PORT || 5000;

// const app = express();

// app.use(cors());

// app.use(express.json());


// app.get('/download', async (req, res) => {

//     const videoURL = req.query.url;

//     if (!ytdl.validateURL(videoURL)) {
//         return res.status(400).json({ error: 'Invalid YouTube URL' });
//     }

//     const info = await ytdl.getInfo(videoURL);
//     const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');

//     res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);

//     ytdl(videoURL, {
//         format: 'mp4'
//     }).pipe(res);
// });

// // app.listen(5000, () => console.log('Server running on port 5000'));

// app.listen(port, () => {
//     `Server Started on port ${port}`;
// });


//----------------------------------------------------------------------

// import ytdl from '@distube/ytdl-core';

// export default async function handler(req, res) {
//     if (req.method !== 'GET') {
//         return res.status(405).json({ error: 'Only GET requests allowed' });
//     }

//     const videoURL = req.query.url;

//     if (!videoURL || !ytdl.validateURL(videoURL)) {
//         return res.status(400).json({ error: 'Invalid YouTube URL' });
//     }

//     try {
//         const info = await ytdl.getInfo(videoURL);
//         const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
//         res.setHeader('Content-Disposition', `attachment; filename="${title}.mp4"`);
//         res.setHeader('Content-Type', 'video/mp4');

//         ytdl(videoURL, { format: 'mp4' }).pipe(res);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to process video download' });
//     }
// }

