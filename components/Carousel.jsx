// components/Carousel.jsx
"use client"
import ResponsiveCarousel from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importing CSS

const Carousel = ({ images }) => {
  return (
    <ResponsiveCarousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={true}
      showStatus={false}
      dynamicHeight
      useKeyboardArrows={true}
      emulateTouch
      swipeable
    >
      {images.map((src, index) => (
        <div key={index} className="carousel-item">
          <Image src={src} alt={`Slide ${index}`} width={500} height={300} layout="responsive" objectFit="cover" />
        </div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;
