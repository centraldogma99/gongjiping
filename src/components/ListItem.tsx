import dayjs from "dayjs"
import {
  HumanIconBlueSVG,
  HumanIconYellowSVG,
  NotLoggedInSVG,
  RightChevronSVG,
} from "../assets"

export interface ListItemProps {
  title: string
  description?: string
  author: string
  dueDate?: Date
  notYetRead?: boolean
}

export const ListItem = ({
  title,
  description,
  author,
  dueDate,
  notYetRead = false,
}: ListItemProps) => {
  return (
    <div className="flex gap-[11px] py-[36px] border-b border-[#E8EBED] items-center">
      {
        [
          <HumanIconBlueSVG key="blue" />,
          <HumanIconYellowSVG key="yellow" />,
          <NotLoggedInSVG key="notLoggedIn" className="w-[52px] h-[52px]" />,
        ][Math.floor(Math.random() * 3)]
      }
      <div className="flex-1">
        <div className="text-[#2B2F34] text-xl font-bold leading-[150%] flex gap-[4px] mb-[3px]">
          <span>{title}</span>
          {notYetRead && <NotYetReadSymbol />}
        </div>
        <div className="text-[#788391] text-base font-medium leading-[150%] mb-[2px]">
          {description}
        </div>
        <div className="text-[#788391] text-sm font-semibold leading-[150%]">
          {author} .{" "}
          {dueDate && dayjs(dueDate).format("YYYY. MM. DD (dd)") + "까지"}
        </div>
      </div>
      <div className="flex items-center justify-center gap-[2px]">
        <button className="text-[#237AF2] text-center text-base font-bold leading-[150%]">
          더 알아보기
        </button>
        <RightChevronSVG />
      </div>
    </div>
  )
}

const NotYetReadSymbol = () => {
  return (
    <div className="w-[8px] h-[8px] bg-[#237AF2] rounded-full mt-[2px]"></div>
  )
}
