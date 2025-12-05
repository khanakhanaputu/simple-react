import { useState } from 'react'
import './App.css'

function App() {
  const [showVideo, setShowVideo] = useState(false)
  const videoSrc = "/wowo.mp4"

  // Styles kept inline for simplicity; kamu bisa pindahkan ke App.css kalau mau
  const pageStyle = {
    padding: '2rem',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const btnStyle = { padding: '0.6rem 1rem', fontSize: '1rem' }

  const videoWrapperStyle = {
    marginTop: '1.5rem',
    // buat kontainer yang membatasi ukuran video agar tidak melebihi layar
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }

  const videoStyle = {
    width: '100%',            // ambil lebar penuh dari kontainer (tapi tidak melebihi maxWidth)
    maxWidth: '600px',       // batas lebar di desktop
    maxHeight: '80vh',       // pastikan tidak melebihi 80% tinggi viewport
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'contain',    // agar aspect ratio tetap terjaga dan seluruh frame terlihat
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  }

  const closeBtnStyle = { marginTop: '0.5rem', padding: '0.5rem 1rem' }

  return (
    <div style={pageStyle}>
      <h1 style={{ marginBottom: '1rem' }}>Pengaduan Pemerintah</h1>

      <button onClick={() => setShowVideo(true)} style={btnStyle}>
        Lanjutkan
      </button>

      {showVideo && (
        <div style={videoWrapperStyle}>
          <div style={{ width: '80%', maxWidth: '400px' }}>
            <video
              src={videoSrc}
              controls
              autoPlay
              muted
              playsInline
              style={videoStyle}
            />

            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setShowVideo(false)} style={closeBtnStyle}>
                Hidup Jokowi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App