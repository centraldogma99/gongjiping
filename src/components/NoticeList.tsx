import { PoliceLightSVG } from "../assets"
import { ListItem, ListItemProps } from "./ListItem"

export enum SortType {
  Latest = "latest",
  Deadline = "deadline",
}

export const NoticeList = ({
  items,
  sortType,
}: {
  items: ListItemProps[]
  sortType: SortType
}) => {
  console.log(sortType)
  return (
    <div>
      <div className="flex gap-[10px] items-center justify-between">
        <div className="flex items-center">
          <PoliceLightSVG />
          <span className="ml-[8px] leading-[150%] font-bold text-[28px]">
            주요 공지
          </span>
          <span className="ml-[10px] text-[#49515A] text-base font-semibold leading-[150%]">
            총 {items.length}건
          </span>
        </div>
        <div className="flex items-center">
          <button
            className={`mr-[18px] text-base font-semibold leading-[150%] ${
              sortType === SortType.Latest ? "text-[#2B2F34]" : "text-[#B9C0C6]"
            }`}
          >
            최신순
          </button>
          <div className="w-[1px] h-[20px] bg-[#E8EBED]" />
          <button
            className={`ml-[18px] text-base font-semibold leading-[150%] ${
              sortType === SortType.Deadline
                ? "text-[#2B2F34]"
                : "text-[#B9C0C6]"
            }`}
          >
            마감순
          </button>
        </div>
      </div>
      {items.map((item) => (
        <ListItem {...item} />
      ))}
    </div>
  )
}
