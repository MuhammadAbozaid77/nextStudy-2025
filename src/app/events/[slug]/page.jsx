export default function EventDetails({ params }) {
  console.log("params", params);

  return (
    <div className="p-5">
      <h1 className="font-bold text-[20px]">EventDetails: {params?.slug} </h1>
    </div>
  );
}
