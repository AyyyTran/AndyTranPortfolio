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
    <div className="w-64 md:w-72 mt-[4rem] py-4 rounded-xl">
      <Slider {...settings}>
        {imagesAndVideos.map((item, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            {item.type === 'image' ? (
              <img
                src={item.url}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded-xl"
              />
            ) : (
              <video controls className="w-full h-auto object-cover rounded-xl">
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
