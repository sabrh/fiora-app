"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const product = {
      name: form.name.value,
      price: parseFloat(form.price.value),
      used_for: form.used_for.value,
      quantity: parseInt(form.quantity.value),
      image: form.image.value,
      description: form.description.value,
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        form.reset();
        alert("Product added successfully!");
        router.push("/products");
      } else {
        alert("Failed to add product");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        className="input input-bordered w-full"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        className="input input-bordered w-full"
        required
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        className="input input-bordered w-full"
        required
      />
      <input
        type="text"
        name="used_for"
        placeholder="Used for"
        className="input input-bordered w-full"
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        className="input input-bordered w-full"
      />
      <textarea
        name="description"
        placeholder="Description"
        className="textarea textarea-bordered w-full"
      ></textarea>

      <button className="btn btn-neutral w-full">Add Product</button>
    </form>
  );
}