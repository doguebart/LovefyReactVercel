import { ChevronDown } from "lucide-react";

interface CollapseProps {
  title: string;
  content: string;
  setCollapseOpen: boolean;
  onToggle: () => void;
}

export const Collapse = ({
  title,
  content,
  setCollapseOpen,
  onToggle,
}: CollapseProps) => {
  return (
    <div
      onClick={onToggle}
      className={`w-full max-h-full flex flex-col p-4 cursor-pointer ${
        setCollapseOpen ? "bg-rosa-lovefy rounded-xl" : "bg-white"
      }`}
    >
      <div
        className={`flex items-center justify-between pb-2 ${
          setCollapseOpen ? "border-none" : "border-b border-neutral-400"
        }`}
      >
        <span
          className={`font-bold text-[18px] ${
            setCollapseOpen ? "text-white" : "text-rosa-lovefy"
          }`}
        >
          {title}
        </span>
        <ChevronDown
          className={`size-5 transform transition-transform duration-300 ${
            setCollapseOpen
              ? "text-white rotate-180"
              : "text-neutral-400 rotate-0"
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${
          setCollapseOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="text-white text-medium mt-2 text-sm bg-dark-rosa-lovefy p-4 rounded-xl">
          {content}
        </p>
      </div>
    </div>
  );
};
