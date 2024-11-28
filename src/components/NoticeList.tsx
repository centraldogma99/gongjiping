import { useState } from "react"
import { PoliceLightSVG } from "../assets"
import { ListItem, ListItemProps } from "./ListItem"

export enum SortType {
  Latest = "latest",
  Deadline = "deadline",
}

export const NoticeList = ({
  sortType,
  className,
}: {
  sortType: SortType
  className?: string
}) => {
  const [content, setContent] = useState<ListItemProps[]>([])

  const handleLogin = () => {
    if (window.gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      window.tokenClient.requestAccessToken({ prompt: "consent" })
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      window.tokenClient.requestAccessToken({ prompt: "" })
    }
  }

  const handleLoad = async () => {
    let response
    try {
      // Fetch first 10 files
      response = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: "1LaGrCPE93LoZUpfD9_Y4HP9AhvPMdwTc9AEeNWxHle0",
        range: "A2:E",
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
        }
      })
    )
  }

  return (
    <div className={className}>
      <button onClick={handleLogin}>로그인</button>
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
      {content?.map((item, i) => (
        <ListItem {...item} key={i} />
      ))}
    </div>
  )
}
