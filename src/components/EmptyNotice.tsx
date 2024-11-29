import { EmptyBoxSVG } from "../assets"

export const EmptyNotice = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <EmptyBoxSVG className="mb-[16px]" />
      <p className="text-[#606A76] text-[18px] mb-[2px] font-medium leading-[150%]">
        반가워요!
      </p>
      <p className="text-black text-center text-[22px] font-bold leading-[150%]">
        등록된 공지가 없어요
      </p>
    </div>
  )
}
