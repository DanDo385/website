// pages/certifications.jsx
import React from 'react';
import CertificatesCarousel from '../components/CertificatesCarousel';


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

const Carousel = () => {
  return (
      <div>
          <h1>Certificates Carousel</h1>
          <CertificatesCarousel certImages={certImages} />
      </div>
  );
};
export default Carousel;
<div className="0"></div>
