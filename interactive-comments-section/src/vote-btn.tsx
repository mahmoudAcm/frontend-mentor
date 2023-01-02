//icons
import PlusIcon from "./icons/plus";
import MinusIcon from "./icons/minus";

export default function VoteButton({ children }: { children: number }) {
  return (
    <div className="flex h-[69px] w-[28px] flex-col items-center justify-around rounded-[8px] bg-[#f5f6fa] py-[2px] text-[13px] font-medium text-[#5c61ac] [@media_(max-width:375px)]:h-[38px] [@media_(max-width:375px)]:w-[100px] [@media_(max-width:375px)]:flex-row">
      <span className="group cursor-pointer">
        <PlusIcon
          width="9"
          height="9"
          className="transition-[0.5s] group-hover:fill-[#5358b4]"
        />
      </span>
      <span>{children}</span>
      <span className="group cursor-pointer">
        <MinusIcon
          width="9"
          height="9"
          className="transition-[0.5s] group-hover:fill-[#5358b4]"
        />
      </span>
    </div>
  );
}
