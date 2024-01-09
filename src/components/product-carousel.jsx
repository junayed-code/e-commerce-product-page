"use client";

import Carousel from "./carousel";

function ProductCarousel({ images = [] }) {
  return (
    <Carousel images={images}>
      <Carousel.Slider>
        <Carousel.SliderButtons className="left-0 right-0 px-4 lg:invisible lg:pointer-events-none" />
      </Carousel.Slider>
      <Carousel.Thumbnails className="hidden lg:flex" />
      <Carousel.Modal />
    </Carousel>
  );
}

export default ProductCarousel;
