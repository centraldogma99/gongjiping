import { EmptyBoxSVG, RefreshSVG } from "../assets"

export const EmptyNotice = ({ onRefresh }: { onRefresh: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <EmptyBoxSVG className="mb-[16px]" />
      <p className="text-[#606A76] text-[18px] mb-[2px] font-medium leading-[150%]">
        반가워요!
      </p>
      <p className="text-black text-center text-[22px] font-bold leading-[150%]">
        등록된 공지가 없어요
      </p>
      <button
        className="rounded-2xl border border-[#DADEE3] bg-white flex items-center justify-center gap-[8px] p-[16px] w-[253px] mt-[27px]"
        onClick={onRefresh}
      >
        <RefreshSVG className="w-[20px] h-[20px]" />
        <span className="text-[#606A76] font-bold text-base leading-[150%]">
          새로 고침
        </span>
      </button>
    </div>
  )
}
