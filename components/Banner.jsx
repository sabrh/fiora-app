"use client";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-red-100 w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 items-center gap-10">
        
        {/* Left side text */}
        <div className="space-y-2">

            <p className="uppercase font-bold text-lg text-gray-700">
            personal beauty products  
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-orange-500">fiora</span><br/> Korean Skincare
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Nourish, hydrate, and protect your skin with premium products made for all skin types.  
          </p>
          <Link href="/products" className="btn bg-orange-500 text-white px-6 py-3 rounded-2xl shadow-md text-lg">
            Shop Now
          </Link>
        </div>

        {/* Right side image */}
        <div className="flex justify-center">
          <Image
            src="/banner-image.png"
            alt="Korean skincare products"
            width={450}
            height={450}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}