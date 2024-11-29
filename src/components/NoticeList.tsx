import { useMemo, useState } from "react"
import { PoliceLightSVG, RefreshSVG } from "../assets"
import { ListItem, ListItemProps } from "./ListItem"
import { isDateExpired, resetTimeToMidnight } from "../utils/date"
import { EmptyNotice } from "./EmptyNotice"
import dayjs from "dayjs"

export enum SortType {
  Latest = "latest",
  Deadline = "deadline",
}

export const NoticeList = ({
  className,
  content,
  onRefresh,
}: {
  className?: string
  content: (ListItemProps & { writtenDate: Date })[]
  onRefresh: () => void
}) => {
  const [sortType, setSortType] = useState<SortType>(SortType.Latest)

  const sortedContent = useMemo(() => {
    return content.sort((a, b) => {
      if (sortType === SortType.Latest) {
        return b.writtenDate.getTime() - a.writtenDate.getTime()
      }

      const aExpired = !a.dueDate || isDateExpired(a.dueDate)
      const bExpired = !b.dueDate || isDateExpired(b.dueDate)

      if (aExpired && bExpired) {
        return b.writtenDate.getTime() - a.writtenDate.getTime()
      }
      if (aExpired) return 1
      if (bExpired) return -1

      return a.dueDate!.getTime() - b.dueDate!.getTime()
    })
  }, [content, sortType])

  if (content.length === 0) {
    return (
      <div className={`${className} flex-1`}>
        <EmptyNotice />
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="flex gap-[10px] items-center justify-between">
        <div className="flex items-center">
          <PoliceLightSVG />
          <span className="ml-[8px] leading-[150%] font-bold text-[20px]">
            주요 공지
          </span>
          <span className="ml-[10px] text-[#606A76] text-base font-semibold leading-[150%]">
            총 {content.length}건
          </span>
          <RefreshSVG
            onClick={onRefresh}
            className="cursor-pointer h-[20px] w-[20px] ml-[10px]"
          />
        </div>
        <div className="flex items-center">
          <button
            className={`mr-[18px] text-base font-semibold leading-[150%] ${
              sortType === SortType.Latest ? "text-[#2B2F34]" : "text-[#B9C0C6]"
            }`}
            onClick={() => setSortType(SortType.Latest)}
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
            onClick={() => setSortType(SortType.Deadline)}
          >
            마감순
          </button>
        </div>
      </div>
      {sortedContent
        ?.filter(
          (data) =>
            dayjs(data.dueDate).diff(resetTimeToMidnight(new Date()), "day") >=
            -2
        )
        ?.map((item, i) => (
          <ListItem {...item} key={i} />
        ))}
    </div>
  )
}
