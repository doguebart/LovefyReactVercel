import { Loader2 } from "lucide-react";

export const PreviewIlovefy = () => {
  return (
    <div className="w-[80%] h-[500px] m-auto bg-neutral-100 border border-neutral-200 rounded-xl shadow">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Loader2 className="animate-spin size-14 text-rosa-ilovefy" />
      </div>
    </div>
  );
};
