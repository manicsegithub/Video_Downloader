// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function DownloadPage() {
//   const location = useLocation();
//   const { url } = location.state || {};
//   const [videoInfo, setVideoInfo] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!url) {
//       setError("No video URL provided.");
//       return;
//     }

//     // Fetch download data from the backend
//     fetch(`http://localhost:5000/download-info?url=${encodeURIComponent(url)}`)
//       .then((res) => res.json())
//       .then((data) => setVideoInfo(data))
//       .catch((err) => {
//         console.error(err);
//         setError("Failed to fetch video data.");
//       });
//   }, [url]);

//   if (error) return <p style={{ color: 'red' }}>{error}</p>;

//   if (!videoInfo) return <p>Loading video information...</p>;

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Download Page</h2>
//       <p><strong>Title:</strong> {videoInfo.title}</p>
//       <p><strong>Author:</strong> {videoInfo.author}</p>
//       <a href={videoInfo.downloadUrl} download>
//         <button>Click here to download</button>
//       </a>
//     </div>
//   );
// }

// export default DownloadPage;
