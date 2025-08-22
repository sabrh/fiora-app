import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AddProductForm from "../../../components/AddProductForm";

export default async function AddProductPage() {
  // check session
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); 
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Add a New Product</h1>
      <AddProductForm />
    </div>
  );
}