"use client";
import CartContent from "@/app/components/CartContent";
import { Suspense } from "react";
 // create a new file for the main cart logic

export default function CartPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading Cart...</div>}>
      <CartContent />
    </Suspense>
  );
}

