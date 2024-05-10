// pages/certifications.tsx
import Head from 'next/head';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';

const Certs = () => {
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

  console.log(certImages);

  return (
    <>
      <Navbar />
      <Head>
        <title>Certificates Carousel</title>
      </Head>
      <div className="container mx-auto mt-8">
        <Carousel images={certImages} />
      </div>
    </>
  );
};

export default Certs;
