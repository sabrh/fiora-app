import ProductCard from "../../../components/ProductCard";
import dbConnect, { collectionNamesObj } from "../../lib/dbConnect";
import Link from "next/link";

export default async function Products({ searchParams }) {
  const productCollection = dbConnect(collectionNamesObj.productCollection);
  const data = await productCollection.find({}).toArray();

  // get current page from query (default: 1)
  const page = parseInt(searchParams.page) || 1;
  const limit = 10; // products per page
  const skip = (page - 1) * limit;

  // get search query
  const search = searchParams.search || "";

  // MongoDB query
  const query = search
    ? { name: { $regex: search, $options: "i" } } // case-insensitive search
    : {};

  // fetch products with pagination + search
  const data = await db
    .collection("products")
    .find(query)
    .skip(skip)
    .limit(limit)
    .toArray();

  // count total products for total pages
  const totalProducts = await db.collection("products").countDocuments(query);
  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="p-6">
      {/* Search Bar */}
      <form className="flex justify-center mb-6">
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search products..."
          className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-neutral text-white rounded-lg"
        >
          Search
        </button>
      </form>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.map((product) => (
          <ProductCard key={product._id.toString()} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            href={`/products?page=${i + 1}&search=${search}`}
            className={`px-4 py-2 rounded-lg border ${
              page === i + 1
                ? "bg-neutral text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
