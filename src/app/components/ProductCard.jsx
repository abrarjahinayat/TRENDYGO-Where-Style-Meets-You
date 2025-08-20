"use client";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();


  const [producttype, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
    image: product.images[product.colors[0]],
  });

  const handleProductType = ({ type, value }) => {
    setProductType((prev) => ({
      ...prev,
      [type]: value,
      ...(type === "color" && { image: product.images[value] }), 
    }));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
        size: producttype.size,
        color: producttype.color,
        image: producttype.image, 
      })
    );
    // localStorage.setItem("addtocart", JSON.stringify(product));
      toast.success("Product added to cart");
  };

  return (
    <div className="container">
      <div className="shadow-lg rounded-lg overflow-hidden">
        {/* IMAGES */}
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-[2/3]">
            <Image
              src={producttype.image}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
        </Link>

        {/* PRODUCT INFO */}
        <div className="flex flex-col gap-4 p-4">
          <h1 className="font-medium">{product.name}</h1>
          <p className="text-sm text-gray-500">{product.shortDescription}</p>

          {/* PRODUCT TYPES */}
          <div className="flex items-center gap-4 text-xs">
            {/* SIZES */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Size</span>
              <select
                onChange={(e) =>
                  handleProductType({ type: "size", value: e.target.value })
                }
                className="ring ring-gray-300 rounded-md px-2 py-1"
                name="size"
                id="size"
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            {/* COLORS */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Colors</span>
              <div className="flex items-center gap-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    onClick={() =>
                      handleProductType({ type: "color", value: color })
                    }
                    className={`cursor-pointer border ${
                      producttype.color === color
                        ? "border-gray-400"
                        : "border-gray-200"
                    } rounded-full p-[1.2px]`}
                  >
                    <div
                      className="w-[14px] h-[14px] rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PRICE + ADD TO CART */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-white cursor-pointer shadow-md ring-1 ring-gray-300 transition duration-300 text-black flex items-center gap-2 hover:text-white hover:bg-black px-4 py-2 rounded-md"
            >
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
