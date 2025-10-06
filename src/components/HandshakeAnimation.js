import React from 'react';
import Lottie from 'lottie-react';
import handshakeData from '../assets/handshake.json';

export default function HandshakeAnimation({ width = 200, height = 200 }) {
  return (
    <div style={{ width, height, margin: '0 auto' }}>
      <Lottie animationData={handshakeData} loop={true} />
    </div>
  );
}
