import useCarousel from "@/hooks/useCarousel";
import Image from "next/image";
import { CloseIcon, NextIcon, PreviousIcon } from "@/utils/icons";
import { createContext, useContext, useEffect, useRef } from "react";

const CarouselContext = createContext();

function Carousel({ children, images, className }) {
  const carousel = useCarousel(images.length);
  carousel.modalRef = useRef();
  carousel.currentImage = images[carousel.imageIndex];
  carousel.images = images;

  carousel.handleToggleModal = () => {
    const modal = carousel.modalRef.current;
    const mql = window.matchMedia("(min-width: 640px)");
    if (!mql.matches) return;

    if (modal?.open) {
      modal?.close();
    } else {
      modal?.showModal();
    }
  };

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 640px)");
    mql.addEventListener("change", event => {
      const modal = carousel.modalRef?.current;
      if (!event.matches && modal?.open) modal.close();
    });
  }, []);

  return (
    <div className={className}>
      <CarouselContext.Provider value={carousel}>
        {children}
      </CarouselContext.Provider>
    </div>
  );
}

Carousel.SliderButtons = function ({ className = "" }) {
  const { nextImage, prevImage } = useContext(CarouselContext);

  return (
    <div
      className={"absolute top-1/2 -translate-y-1/2 flex justify-between "
        .concat(className)
        .trim()}
    >
      <button
        className="bg-white w-12 h-12 pr-1 flex items-center justify-center rounded-full"
        onClick={e => {
          e.stopPropagation();
          prevImage();
        }}
      >
        <PreviousIcon
          color={null}
          className="stroke-black hover:stroke-primary"
        />
      </button>
      <button
        className="bg-white w-12 h-12 pl-1 flex items-center justify-center rounded-full"
        onClick={e => {
          e.stopPropagation();
          nextImage();
        }}
      >
        <NextIcon color={null} className="stroke-black hover:stroke-primary" />
      </button>
    </div>
  );
};

Carousel.Slider = function ({ className = "", isOnClick = true, children }) {
  const { images, imageIndex, handleToggleModal } = useContext(CarouselContext);

  return (
    <figure
      onClick={isOnClick ? handleToggleModal : undefined}
      className={`w-full aspect-square relative `
        .concat(isOnClick ? "sm:cursor-pointer " : "")
        .concat(className)
        .trim()}
    >
      <div className="w-full overflow-hidden sm:rounded-xl">
        <div
          style={{ transform: `translateX(calc(-100%*${imageIndex}))` }}
          className="flex duration-200"
        >
          {images.map(image => (
            <Image
              key={image.id}
              src={image.src}
              className="h-full object-cover select-none"
              alt={`Product ${image.id} image`}
            />
          ))}
        </div>
      </div>

      {children}
    </figure>
  );
};

Carousel.Thumbnails = function ({ className = "" }) {
  const { currentImage, images, handleChangeDisplayImage } =
    useContext(CarouselContext);
  const currentImageID = currentImage.id;
  const thumbnailsImage = images.map(({ id, thumbSrc }) => ({
    id,
    thumbSrc,
  }));

  return (
    <div className={"mt-7 gap-x-3 justify-between ".concat(className).trim()}>
      {thumbnailsImage.map(({ id, thumbSrc }) => (
        <figure
          key={id}
          onClick={handleChangeDisplayImage(id - 1)}
          className={`rounded-lg overflow-hidden max-h-[88px] max-w-[88px] cursor-pointer ring-[3px] relative before:absolute before:inset-0 hover:before:bg-white/35 before:duration-150 `.concat(
            id === currentImageID
              ? "ring-primary before:bg-white/35"
              : "ring-transparent"
          )}
        >
          <Image
            className={`object-cover h-full`}
            src={thumbSrc}
            alt={`Image ${id} thumbnail`}
          />
        </figure>
      ))}
    </div>
  );
};

Carousel.Modal = function ({ className = "" }) {
  const carousel = useContext(CarouselContext);

  return (
    <dialog
      ref={carousel.modalRef}
      className={"fixed inset-0 w-full h-full max-w-[none] max-h-[none] m-0 p-0 z-[99] bg-transparent backdrop:bg-black/60 grid place-items-center overscroll-contain invisible pointer-events-none sm:open:visible sm:open:pointer-events-auto"
        .concat(className)
        .trim()}
    >
      <div className="relative max-w-[440px] max-h-[calc(100vh-4rem)] overflow-y-auto p-[32px_24px_5px]">
        <form method="dialog">
          <button className="absolute right-5 top-0 outline-none">
            <CloseIcon color="#FF7E1B" />
          </button>
        </form>

        <Carousel.Slider isOnClick={false}>
          <Carousel.SliderButtons className="-left-5 -right-5" />
        </Carousel.Slider>
        <Carousel.Thumbnails className="px-8 flex" />
      </div>
    </dialog>
  );
};

export default Carousel;
