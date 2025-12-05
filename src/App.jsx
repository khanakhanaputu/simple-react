import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [showAnim, setShowAnim] = useState(false)

  // PRELOAD GIF SEBELUM TOMBOL DIKLIK — memastikan benar-benar fully loaded
  const [gifReady, setGifReady] = useState(false)
  const gifSrc = '/wowo_opt.gif' // pastikan file ada di public/wowo_opt.gif

  useEffect(() => {
    const img = new Image()
    img.src = gifSrc
    img.onload = () => {
      setGifReady(true)
    }
    // optional: cleanup (tidak wajib untuk Image but good practice)
    return () => {
      img.onload = null
    }
  }, [])

  // Styles inline untuk kemudahan; kamu bisa pindahkan ke App.css
  const pageStyle = {
    padding: '2rem',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const btnStyle = { padding: '0.6rem 1rem', fontSize: '1rem' }

  const mediaWrapperStyle = {
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }

  const imgStyle = {
    width: '100%',
    maxWidth: '400px',
    maxHeight: '60vh',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'contain',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
    display: 'block',
  }

  const closeBtnStyle = { marginTop: '0.5rem', padding: '0.5rem 1rem' }

  return (
    <div style={pageStyle}>
      <h1 style={{ marginBottom: '1rem' }}>Pengaduan Pemerintah</h1>

      <button
        onClick={() => gifReady && setShowAnim(true)}
        style={btnStyle}
        disabled={!gifReady}
      >
        {gifReady ? 'Lanjutkan' : 'Memuat...'}
      </button>

      {showAnim && (
        <div style={mediaWrapperStyle}>
          <div style={{ width: '80%', maxWidth: '400px' }}>
            {/* Tampilkan GIF yang sudah di-preload */}
            <img src={gifSrc} alt="animasi" style={imgStyle} />

            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setShowAnim(false)} style={closeBtnStyle}>
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
