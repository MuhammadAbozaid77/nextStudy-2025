import Link from "next/link";

export default function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <button className="w-[100%] text-[20px] bg-gray-800 text-white rounded-md p-2 capitalize disabled:bg-gray-400">
          {props.children}
        </button>
      </Link>
    );
  }
  return (
    <>
      <button
      type={props.type}
        onClick={props.onClick}
        className="w-[100%] text-[20px] bg-gray-800 text-white rounded-md p-2 capitalize disabled:bg-gray-400"
      >
        {props.children}
      </button>
    </>
  );
}
