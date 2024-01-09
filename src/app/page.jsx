import ProductCarousel from "@/components/product-carousel";
import productsImage from "@/utils/productsImage";
import AddToCart from "@/components/add-to-cart";

export default function Home() {
  return (
    <main>
      <div className="p-[0_0_50px] sm:py-10 md:py-20 lg:px-6 flex flex-col lg:flex-row items-center justify-between gap-x-10 gap-y-7">
        <div className="basis-full sm:max-w-[464px]">
          <ProductCarousel images={productsImage} />
        </div>

        <div className="basis-full max-w-2xl lg:max-w-[464px] px-6 lg:px-0">
          <p className="uppercase font-semibold mb-4 text-primary">
            sneaker company
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8">
            Fall Limited Edition
            <br />
            Sneakers
          </h1>
          <p className="text-gray-500 leading-relaxed mb-6">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          {/* Price section */}
          <div className="leading-loose mb-7 flex sm:flex-col justify-between">
            <p className="flex items-center text-2xl sm:text-4xl font-bold gap-5">
              <span>$125.00</span>
              <span className="text-base sm:text-lg rounded-md leading-none px-2 py-1 sm:py-0.5 bg-primary/10 text-primary">
                50%
              </span>
            </p>
            <del className="font-medium text-gray-400 ml-1">$250.00</del>
          </div>

          {/* Add to cart section */}
          <AddToCart />
        </div>
      </div>
    </main>
  );
}
