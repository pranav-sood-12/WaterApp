import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import carouselcomp from "./carouselcomp";

const carouselcomp = [
  {
    id: 1,
    title: "1",
    alt: "First Image",
    src: "https://images.unsplash.com/photo-1528991435120-e73e05a58897?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "2",
    alt: "Second Image",
    src: "https://images.unsplash.com/photo-1572495532056-8583af1cbae0?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "3",
    alt: "Third Image",
    src: "https://images.unsplash.com/photo-1607823489283-1deb240f9e27?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEFmcmljYW4lMjBmYXNoaW9ufGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "4",
    alt: "Forth Image",
    src: "https://images.unsplash.com/flagged/photo-1578907015404-bd0176fb3108?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEFmcmljYW4lMjBmYXNoaW9ufGVufDB8fDB8fHww",
  },
  {
    id: 5,
    title: "5",
    alt: "Fifth Image",
    src: "https://images.unsplash.com/photo-1584530193960-b4eb6c87081c?auto=format&fit=crop&q=80&w=2824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "6",
    alt: "Sixth Image",
    src: "https://images.unsplash.com/photo-1560457099-64cb8a5eb503?auto=format&fit=crop&q=80&w=2786&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "7",
    alt: "Seventh Image",
    src: "https://images.unsplash.com/photo-1530884698386-d42ad3199b1f?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SliderHomeMaps = () => {
  const settings = {
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1700,
  };

  return (
    <div className="text-center m-8">
      <div className="mx-auto w-full h-[80vh] border-white">
        <Slider {...settings}>
          {carouselcomp.map((item) => (
            <div key={item.id}>
              <div className="flex justify-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-[400px] h-[400px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl">{item.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderHomeMaps;
