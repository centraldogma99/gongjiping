import { useMemo, useState } from "react"
import { PoliceLightSVG } from "../assets"
import { ListItem, ListItemProps } from "./ListItem"

export enum SortType {
  Latest = "latest",
  Deadline = "deadline",
}

export const NoticeList = ({ className }: { className?: string }) => {
  const [content, setContent] = useState<
    (ListItemProps & { writtenDate: Date })[]
  >([])
  const [sortType, setSortType] = useState<SortType>(SortType.Latest)

  const sortedContent = useMemo(() => {
    return content.sort((a, b) => {
      return sortType === SortType.Latest
        ? a.writtenDate.getTime() - b.writtenDate.getTime()
        : !a.dueDate && !b.dueDate
        ? a.writtenDate.getTime() - b.writtenDate.getTime()
        : (a.dueDate?.getTime() ?? 0) - (b.dueDate?.getTime() ?? 0)
    })
  }, [content, sortType])

  const handleLoad = async () => {
    let response
    try {
      // Fetch first 10 files
      response = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: "1LaGrCPE93LoZUpfD9_Y4HP9AhvPMdwTc9AEeNWxHle0",
        range: "A2:F",
      })
    } catch (err) {
      console.log(err)
      return
    }
    const range = response.result
    if (!range || !range.values || range.values.length == 0) {
      console.log("No values found.")
      return
    }
    setContent(
      (range.values as string[][]).map((item) => {
        return {
          title: item[0],
          dueDate: new Date(item[1]),
          description: item[2],
          author: item[4],
          writtenDate: new Date(item[5]),
        }
      })
    )
  }

  return (
    <div className={className}>
      <button onClick={handleLoad}>로드</button>
      <div className="flex gap-[10px] items-center justify-between">
        <div className="flex items-center">
          <PoliceLightSVG />
          <span className="ml-[8px] leading-[150%] font-bold text-[28px]">
            주요 공지
          </span>
          <span className="ml-[10px] text-[#49515A] text-base font-semibold leading-[150%]">
            총 {content.length}건
          </span>
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
      {sortedContent?.map((item, i) => (
        <ListItem {...item} key={i} />
      ))}
    </div>
  )
}
