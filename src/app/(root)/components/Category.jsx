"use client"
import React from 'react'
import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];
const Category = () => {
    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get("category");
    const router = useRouter();
    const path = usePathname();
    
    const handleclick = (slug) => {
      router.push(`${path}?category=${slug}`, {scroll: false});
    }



  return (
    <div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm'>
          {categories.map((category) => (
            <div onClick={()=>handleclick(category.slug)} key={category.slug} className={`flex items-center justify-center cursor-pointer px-2 py-1 rounded-md gap-2 ${selectedCategory === category.slug ? "bg-white" : "text-gray-500"}`}>
              {category.icon}
              {category.name}
            </div>
          ))}
        </div>
    </div>
  )
}

export default Category