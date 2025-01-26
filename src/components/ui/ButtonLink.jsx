import Link from "next/link";

export default function ButtonLink({ children, link, onClick }) {
  if (link) {
    return (
      <Link href={link}>
        <button className="w-[100%] text-[20px] bg-gray-800 text-white rounded-md p-2 capitalize disabled:bg-gray-400">
          {children}
        </button>
      </Link>
    );
  }
  return (
    <>
      <button
        onClick={onClick}
        className="w-[100%] text-[20px] bg-gray-800 text-white rounded-md p-2 capitalize disabled:bg-gray-400"
      >
        {children}
      </button>
    </>
  );
}
