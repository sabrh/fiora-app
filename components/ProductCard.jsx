import Link from "next/link";
import clientPromise from "@/lib/dbConnect";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow flex flex-col items-center bg-white">
      <img
        src={product.image || "/placeholder.png"}
        alt={product.name || "Product Image"}
        className="w-40 h-40 object-cover mb-4"
      />
      <h2 className="text-lg font-bold text-center">
        {product.name || "Unnamed Product"}
      </h2>
      <p className="text-gray-600 mt-1">{product.quantity}</p>
      <Link
        href={`/products/${product._id}`}
        className="btn btn-neutral mt-4 w-full"
      >
        Details
      </Link>
    </div>
  );
}
