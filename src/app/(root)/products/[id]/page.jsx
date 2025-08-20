import ProductInteraction from "@/app/components/ProductInteraction";
import Image from "next/image";
import React from "react";

const products = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 59.9,
  sizes: ["xs", "s", "m", "l", "xl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
  slug: "adidas-corefit-t-shirt",
};
const ProductPage = ({ searchParams }) => {
  const { size, color } = searchParams;
  const selectedSize = size || products.sizes[0];
  const selectedColor = color || products.colors[0];
  return (
    <div className="container flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGES */}
      <div className="w-full lg:w-5/12 relative aspect-[2/2]">
        <Image
          src={products.images[selectedColor]}
          alt={products.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* DETAILES */}
      <div className="w-full lg:w-7/12  flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{products.name}</h1>
        <p className="text-gray-500">{products.description}</p>
        <h2 className="text-2xl font-semibold">${products.price.toFixed(2)}</h2>

        <ProductInteraction
          products={products}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />

        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
