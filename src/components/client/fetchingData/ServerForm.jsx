"use client";
import { useActionState } from "react";
import FormSubmitting from "./FormSubmitting";

export default function ServerForm({ action }) {
  const [state, formAction, isPending] = useActionState(action, {});
  // state for errors
  return (
    <div className="p-[50px]">
      <form action={formAction} className="border p-5 w-[500px] rounded-md">
        <div className="flex flex-col mb-5">
          <label htmlFor="" className="font-semibold">
            First Name
          </label>
          <input
            className="border w-[100%] rounded-md p-2 "
            type="text"
            name="firstName"
            id=""
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="" className="font-semibold">
            fileUploadName
          </label>
          <input
            className="border w-[100%] rounded-md p-2 "
            type="file"
            name="fileUploadName"
            id=""
            multiple
          />
        </div>
        <FormSubmitting />
      </form>
    </div>
  );
}
