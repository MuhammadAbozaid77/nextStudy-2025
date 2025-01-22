"use client";
import { useFormStatus } from "react-dom";

export default function FormSubmitting() {
  const { pending } = useFormStatus();

  return (
    <div className="flex gap-5">
      <button
        className="w-[100%] text-[20px] bg-gray-800 text-white rounded-md p-2 capitalize disabled:bg-gray-400"
        disabled={pending}
        type="submit"
      >
        Submit
      </button>
      <button
        className="w-[100%] text-[20px] bg-sky-800 text-white rounded-md p-2 capitalize disabled:bg-sky-400"
        type="reset"
        disabled={pending}
      >
        Reset
      </button>
    </div>
  );
}
