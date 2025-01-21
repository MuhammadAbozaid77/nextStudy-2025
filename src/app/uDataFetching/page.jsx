import ClientFetchingData from "@/components/client/fetchingData/ClientFetchingData";
import { getAllData } from "@/components/willUnderstand/PromiseCode";
import { Suspense } from "react";

export default async function ServerFetchingData() {
  //---------------------------------------------------  Fetching Data By Server Side ---------------------------------------------------
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();
  // console.log("ServerFetchingData", data);

  // For Loading Test
  const res = await getAllData();
  return (
    <div className="p-[50px]">
      <h2>GOOOODPLAY</h2>
      <Suspense fallback={<Loading />}>
        <ClientFetchingData />
      </Suspense>
    </div>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
