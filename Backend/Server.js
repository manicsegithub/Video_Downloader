// const express = require('express');
// const cors = require('cors');
// //const ytdl = require('ytdl-core');

// const ytdl = require('@distube/ytdl-core');

// const app = express();
// app.use(cors({
//     origin : ["https://video-downloader-backend.vercel.app"],
//     methods : ["POST","GET"],
//     credentials : true
// }));
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

// app.listen(5000, () => console.log('Server running on port 5000'));


//--------------------------------------------------------------------

const express = require('express');
const cors = require('cors');
//const ytdl = require('ytdl-core');

const ytdl = require('@distube/ytdl-core');

const port = process.evn.PORT || 5000;

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

// app.listen(5000, () => console.log('Server running on port 5000'));

app.listen(port, () => {
    `Server Started on port ${port}`;
});

