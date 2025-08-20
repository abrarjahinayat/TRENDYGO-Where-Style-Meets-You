"use client";
import PaymentForm from "@/app/components/PaymentForm";
import ShippingForm from "@/app/components/ShippingForm";
import { Trash2 } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart,updateQuantity,clearCart } from "@/redux/cartSlice";

const steps = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shipping Address" },
  { id: 3, title: "Payment Method" },
];

const cartItems = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Lorem ipsum dolor sit amet...",
    description: "Lorem ipsum dolor sit amet...",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: { gray: "/products/1g.png", purple: "/products/1p.png", green: "/products/1gr.png" },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription: "Lorem ipsum dolor sit amet...",
    description: "Lorem ipsum dolor sit amet...",
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
    shortDescription: "Lorem ipsum dolor sit amet...",
    description: "Lorem ipsum dolor sit amet...",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: { green: "/products/3gr.png", blue: "/products/3b.png", black: "/products/3bl.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];

export default function CartContent() {
  const {cartItems} = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingfrom, setshippingfrom] = useState(null);

  const activeStep = Number(searchParams.get("step")) || 1;

  return (
    <div className="container">
      <div className="flex flex-col gap-8 items-center justify-center mt-12">
        <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      </div>

      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-5 gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-300"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      {/* STEPS AND DETAILS */}
      <div className="w-full flex flex-col lg:flex-row gap-16 py-10">
        {/* STEPS */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cartItems.map((item) => (
              <div className="flex items-center justify-between" key={item.id}>
                <div className="flex gap-8">
                  <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-xs text-gray-500">Size: {item.size}</p>
                      <p className="text-xs text-gray-500">Color: {item.color}</p>
                    </div>
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm />
          ) : activeStep === 3 ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-500">Please fill in the shipping form to Continue.</p>
          )}
        </div>

        {/* DETAILS */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-medium">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <p className="text-sm text-gray-500 font-medium">Subtotal</p>
              <p className="font-medium">
                $
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500 font-medium">Discount(10%)</p>
              <p className="font-medium">$10</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500 font-medium">Shipping Fee</p>
              <p className="font-medium">$10</p>
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between">
            <p className="text-gray-800 font-semibold">Total</p>
            <p className="font-medium">
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
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
  );
}
