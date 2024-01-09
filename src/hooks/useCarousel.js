import { useState } from "react";

/**
 *
 * @param {number} imagesLength
 * @returns {{imageIndex: number, nextImage: () => void, prevImage: () => void, handleChangeDisplayImage: (index:number) => void}}
 */
function useCarousel(imagesLength) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex(curr => {
      if (curr === imagesLength - 1) return 0;
      return curr + 1;
    });
  };

  const prevImage = () => {
    setImageIndex(curr => {
      if (curr === 0) return imagesLength - 1;
      return curr - 1;
    });
  };

  const handleChangeDisplayImage = index => setImageIndex.bind(null, index);

  return { imageIndex, nextImage, prevImage, handleChangeDisplayImage };
}

export default useCarousel;
