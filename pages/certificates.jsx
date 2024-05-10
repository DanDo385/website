import React from 'react';
import CertificatesCarousel from './CertificatesCarousel';

const certImages = [
  '/certs/rutgers.jpg',
  '/certs/udemy.jpg',
  '/certs/udemy2.jpg',
  '/certs/dappu.jpg',
  '/certs/upenn.jpg',
  '/certs/duke-full.jpg',
  '/certs/insead-full.jpg',
  '/certs/cryptography.jpg',
];

const App = () => {
  return (
    <div>
      <h1>Certificates Carousel</h1>
      <CertificatesCarousel certImages={certImages} />
    </div>
  );
};

export default App;
