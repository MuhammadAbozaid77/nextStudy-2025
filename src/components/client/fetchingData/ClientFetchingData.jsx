"use client";

import { useEffect, useState } from "react";

export default function ClientFetchingData() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      // console.log("ClientFetchingData", data);
    }

    getPosts();
  }, []);

  return (
    <div>
      {posts?.map((el) => (
        <div
          key={el?.id}
          className="border p-1 mb-2 rounded-md bg-gray-100 capitalize cursor-pointer"
        >
          {el?.title}
        </div>
      ))}
    </div>
  );
}
