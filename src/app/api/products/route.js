import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const body = await req.json();
    const productsCollection = dbConnect(collectionNamesObj.productCollection);

    const result = await productsCollection.insertOne(body);

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 201,
    });
  } catch (err) {
    console.error("Error inserting product:", err);
    return new Response(JSON.stringify({ success: false, error: "Failed to add product" }), {
      status: 500,
    });
  }
}