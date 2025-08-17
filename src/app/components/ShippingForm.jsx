"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// ✅ Validation schema with Zod
const shippingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 11 digits")
    .max(11, "Phone number must be between 7 and 11 digits"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
});

const ShippingForm = ({ onSubmitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(shippingSchema),
  });

  const onSubmit = (data) => {
    console.log("Shipping data:", data);
    if (onSubmitForm) onSubmitForm(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-10"
    >
      {/* Name */}
      <div>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <input
          type="text"
          placeholder="Phone"
          {...register("phone")}
          className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <input
          type="text"
          placeholder="Address"
          {...register("address")}
          className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>

      {/* City */}
      <div>
        <input
          type="text"
          placeholder="City"
          {...register("city")}
          className="w-full border-b border-gray-300 p-2  focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        {errors.city && (
          <p className="text-red-500 text-sm">{errors.city.message}</p>
        )}
      </div>

      {/* Continue Button */}
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg flex items-center justify-center"
      >
        Continue →
      </button>
    </form>
  );
};

export default ShippingForm;
