import ServerForm from "@/components/client/fetchingData/ServerForm";
import { createPost } from "@/utils/services/actionCreatePost";

//  Mutating Data With ----- Server Action
export default function UMutatingData() {
  return (
    <div className="p-[50px]">
      <h1>UMutatingData</h1>
      <div>
        <ServerForm action={createPost} />
      </div>
    </div>
  );
}
