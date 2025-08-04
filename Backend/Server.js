//Main code work in local file 

// const express = require('express');
// const cors = require('cors');
// //const ytdl = require('ytdl-core');

// const ytdl = require('@distube/ytdl-core');

// const app = express();
// app.use(cors({
//     origin : ["https://video-downloader-frontend.vercel.app"],
//     methods : ["POST","GET"],
//     credentials : true
// }));
// app.use(express.json());

// //Check the server is connected or not 
// app.get('/', (req,res) => {
//     return res.json("Connected Successfully...");
// })

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


//2.Use for vercel server --------------------------------------------------------------------

const express = require('express');
const cors = require('cors');
//const ytdl = require('ytdl-core');

const ytdl = require('@distube/ytdl-core');

const app = express();
app.use(cors({
    origin : ["https://video-downloader-frontend.vercel.app"],
    methods : ["POST","GET"],
    credentials : true
}));
app.use(express.json());

//Check the server is connected or not 
app.get('/', (req,res) => {
    return res.json("Connected Successfully...");
})

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

