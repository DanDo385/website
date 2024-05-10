import React from 'react';
import Slider from 'react-slick';

const CertificatesCarousel = ({ certImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {certImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Certificate ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default CertificatesCarousel;
