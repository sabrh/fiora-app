import React from "react";
import clientPromise from "@/lib/dbConnect";
import ProductCard from "./ProductCard";

export default async function FeaturedProducts() {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const data = await db.collection("products").find().toArray();

     // shuffle and pick 6 random products
    const shuffled = data.sort(() => 0.5 - Math.random());
    const featured = shuffled.slice(0, 6);

  return (
    <div className="mx-4 md:mx-16 my-10">
        <h2 className="justify-center text-center font-bold text-xl">Our Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {featured.map((product) => (
            <ProductCard key={product._id.toString()} product={product} />
        ))}
        </div>
    </div>
  );
}