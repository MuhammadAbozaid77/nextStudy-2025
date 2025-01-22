"use server";
import { getAllData } from "@/components/willUnderstand/PromiseCode";
import { redirect } from "next/navigation";

export async function createPost(prevData, formData) {
  console.log("formData", formData);
  // const fileData = formData.get("")
  await getAllData();
  // Mutate Function
  // redirect("/");
}
