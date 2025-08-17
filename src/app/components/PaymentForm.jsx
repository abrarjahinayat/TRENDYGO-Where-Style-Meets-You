"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

// ✅ Validation schema with Zod
const PaymentSchema = z.object({
  cardHolder: z.string().min(1, "Card Holder is required"),
  cardNumber: z
    .string()
    .min(16, "Card Number is required!")
    .max(16, "Card Number is required!"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in MM/YY format!"
    ),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!"),
});

const PaymentForm = ({ onSubmitForm }) => {
    const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PaymentSchema),
  });

  const onSubmit = (data) => {
    console.log("Shipping data:", data);
    if (onSubmitForm) onSubmitForm(data);
      router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-6"
    >
      {/*  Name on Card */}
       <div className="flex flex-col gap-1">
        <label htmlFor="cardHolder" className="text-xs text-gray-500 font-medium">
          Name on Card
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardHolder"
          placeholder="Abrar Jahin"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>

      {/*  Card Number */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cardNumber" className="text-xs text-gray-500 font-medium">
          Card Number
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardNumber"
          placeholder="123456789"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      {/* Expiration Date */}
     <div className="flex flex-col gap-1">
        <label htmlFor="expirationDate" className="text-xs text-gray-500 font-medium">
          Expiration Date
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="expirationDate"
          placeholder="01/28"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-500">{errors.expirationDate.message}</p>
        )}
      </div>
      {/* CVV */}
       <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="number"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-xs text-red-500">{errors.cvv.message}</p>
        )}
      </div>

          <div className='flex items-center gap-2 mt-4'>
        <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md"/>
        <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md"/>
        <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md"/>
      </div>

      {/* Continue Button */}
      <button
        type="submit"
        className="w-full bg-gray-800 cursor-pointer hover:bg-gray-900 text-white py-2 rounded-lg flex items-center justify-center"
      >
       CheckOut
        <ShoppingCart className="w-4 h-4 ml-2" />
      </button>
    </form>
  );
};

export default PaymentForm;
