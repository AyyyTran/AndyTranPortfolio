import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Climb from '../Assets/climb.mp4';
import Golf from '../Assets/golf.mp4';
import Grad from '../Images/grad.png';

const ImageAndVideoCarousel = () => {
  const imagesAndVideos = [
    {
      type: 'image',
      url: Grad,
    },
    {
      type: 'video',
      url: Golf,
    },
    {
      type: 'video',
      url: Climb,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:max-w-lg max-w-sm xl:mx-72 p-4">
      <Slider {...settings}>
        {imagesAndVideos.map((item, index) => (
          <div key={index}>
            {item.type === 'image' ? (
              <img
                src={item.url}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
              />
            ) : (
              <video controls className="w-full h-auto">
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageAndVideoCarousel;