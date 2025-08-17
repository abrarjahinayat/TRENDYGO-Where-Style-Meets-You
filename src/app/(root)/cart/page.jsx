"use client";
import { ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

// TEMPORARY
const cartItems = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];
const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeStep = searchParams.get("step") || 1;
  return (
    <div>
      <div className="container">
        <div className="flex flex-col gap-8 items-center justify-center mt-12 ">
          {/* TITLE */}
          <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
        </div>
        {/* STEPS */}
        <div className="flex flex-col lg:flex-row items-center justify-center mt-5 gap-8 lg:gap-16">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center gap-2  border-b-2 pb-4 ${
                step.id === Number(activeStep)
                  ? "border-gray-800"
                  : "border-gray-300"
              } `}
            >
              <div
                className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                  step.id === Number(activeStep) ? "bg-gray-800" : "bg-gray-400"
                }`}
              >
                {step.id}
              </div>
              <p className={`text-sm font-medium ${
                step.id ===  Number(activeStep) ? "text-gray-800" : "text-gray-400"
              }`}>{step.title}</p>
            </div>
          ))}
        </div>

        {/* STEPS AND DETAILES  */}
        <div className="w-full flex flex-col lg:flex-row gap-16 py-10">
         {/* STEPS */}
         <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
            1
         </div>
         {/* DETAILES */}
         <div  className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
            <h2 className="font-medium ">Cart Detailes</h2>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <p className="text-sm text-gray-500 font-medium">Subtotal</p>
                    <p className="font-medium">
                        $ {
                            cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
                        }
                    </p>
                </div>
                 <div className="flex justify-between text-sm">
              <p className="text-gray-500 font-medium">Discount(10%)</p>
              <p className="font-medium">$ 10</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500 font-medium" >Shipping Fee</p>
              <p className="font-medium">$10</p>
            </div>
            </div>
                <hr className="border-gray-200" />
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Total</p>
              <p className="font-medium">
                $
                {
                    cartItems.reduce((total, item)=> total + item.price * item.quantity, 0).toFixed(2)
                }
              </p>
            </div>
              {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
         </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
