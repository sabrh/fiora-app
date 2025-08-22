import clientPromise from "@/lib/dbConnect";
import Image from "next/image";
import { ObjectId } from "mongodb"; 

export default async function ProductDetails({ params }) {
  const { id } = params;

  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);

  // fetch single product by _id
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Product Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name || "Product Image"}
          width={500}
          height={500}
          className="object-cover rounded-lg shadow"
        />
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.used_for}</p>
        {product.description && <p>{product.description}</p>}
        {product.price && (
          <p className="text-lg font-semibold mt-2">${product.price}</p>
        )}
        <p className="text-gray-500">Quantity: {product.quantity}</p>
        <button className="btn btn-neutral mt-4 w-full">Add to Cart</button>
      </div>
    </div>
  );
}