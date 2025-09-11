import React, { useEffect, useState } from 'react';
import image1 from '../../assets/alec-img/slider-img/1.jpeg'
import { borderRadius, height, textAlign, width } from '@mui/system';
import { color } from 'framer-motion';
const AdPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Trigger popup after 10 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <button style={styles.closeButton} onClick={handleClose}>
              &times;
            </button>
            <img id='banner-poup'
              src={image1}
              alt="Ad Banner"

            />
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  popup: {
    position: 'relative',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    maxWidth: '55%',
    height:'55vh',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 10,
    fontSize: '30px',
    background: 'black',
    textAlign:"center",
    border: 'none',
    color:'white',
    borderRadius:"50%",
    cursor: 'pointer',
  },
  image: {
    borderRadius: '8px',
  },
};

export default AdPopup;
