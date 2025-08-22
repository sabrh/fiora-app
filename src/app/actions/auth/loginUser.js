"use server";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
  try {
    const { email, password } = payload;
    const userCollection = dbConnect(collectionNamesObj.userCollection);

    const user = await userCollection.findOne({ email });
    if (!user) return null;

    if (user.password !== password) return null;

    return user;
  } catch (err) {
    console.error("Error in loginUser:", err);
    return null;
  }
};
