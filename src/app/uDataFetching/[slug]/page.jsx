import { getAllData } from "@/components/willUnderstand/PromiseCode";

export default async function page({ params }) {
  const slug = params.slug;
  const res = await getAllData();

  return <div className="p-[50px]  font-bold text-[50px]"> {slug}</div>;
}
