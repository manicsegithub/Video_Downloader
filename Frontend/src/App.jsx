// import React, { useState } from 'react';

// function App() {
//   const [url, setUrl] = useState('');
//   const [error, setError] = useState('');

//   const handleDownload = () => {
//     if (!url) {
//       setError("Please enter a video URL.");
//       return;
//     }

//     // Use backend to trigger download
//     window.open(`http://localhost:5000/download?url=${encodeURIComponent(url)}`);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Video Downloader</h2>
//       <input
//         type="text"
//         value={url}
//         placeholder="Enter YouTube video URL"
//         onChange={(e) => { setUrl(e.target.value); setError(''); }}
//         style={{ width: '400px', padding: '10px' }}
//       />
//       <button onClick={handleDownload} style={{ marginLeft: '10px' }}>
//         Download
//       </button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>

//   );
// }

// export default App;


//2.------------------------------------------------------------------------

// import React, { useState } from 'react';
// //import { useNavigate } from 'react-router-dom'

// function App() {
//   const [url, setUrl] = useState('');
//   const [error, setError] = useState('');
//   //const navigate = useNavigate();

//   const handleDownload = () => {
//     if (!url) {
//       setError("Please enter a video URL.");
//       return;
//     }

//     window.open(`http://localhost:5000/download?url=${encodeURIComponent(url)}`);

//     // navigate("/");

//   };

  

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Video Downloader</h2>
//       <div style={styles.inputContainer}>
//         <input
//           type="text"
//           value={url}
//           placeholder="Enter YouTube video URL"
//           onChange={(e) => { setUrl(e.target.value); setError(''); }}
//           style={styles.input}
          
//         />
//         <button onClick={handleDownload} style={styles.button}>
//           Download
//         </button>
//       </div>
//       {error && <p style={styles.error}>{error}</p>}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: '20px',
//     maxWidth: '600px',
//     margin: '0 auto',
//     fontFamily: 'Arial, sans-serif',
//   },
//   heading: {
//     textAlign: 'center',
//   },
//   inputContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     boxSizing: 'border-box',
//   },
//   button: {
//     padding: '10px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
//   error: {
//     color: 'red',
//     marginTop: '10px',
//   },
// };

// export default App;


//3.-------------------------------------------------------------------

import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom'

function App() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  //const navigate = useNavigate();

  const handleDownload = () => {
    if (!url) {
      setError("Please enter a video URL.");
      return;
    }

    window.open(`https://video-downloader-backend-weld.vercel.app/download?url=${encodeURIComponent(url)}`);

    // navigate("/");

  };

  

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Video Downloader</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={url}
          placeholder="Enter YouTube video URL"
          onChange={(e) => { setUrl(e.target.value); setError(''); }}
          style={styles.input}
          
        />
        <button onClick={handleDownload} style={styles.button}>
          Download
        </button>
      </div>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default App;
