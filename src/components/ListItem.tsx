import { RightChevron } from "../assets"

interface ListItemProps {
  title: string
  description?: string
  author: string
  dueDate: Date
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
    <div className="flex gap-[11px] py-[36px] border-t border-[#E8EBED] first:border-t-0">
      <div className="flex items-center justify-center">
        <div className="w-[52px] h-[52px] bg-red-500"></div>
      </div>
      <div className="flex-1">
        <div className="text-[#2B2F34] font-pretendard text-xl font-bold leading-[150%] flex gap-[4px]">
          <span>{title}</span>
          {notYetRead && <NotYetReadSymbol />}
        </div>
        <div className="text-[#788391] font-pretendard text-base font-medium leading-[150%]">
          {description}
        </div>
        <div className="text-[#788391] font-pretendard text-sm font-semibold leading-[150%]">
          {author} . {dueDate.toLocaleDateString()}까지
        </div>
      </div>
      <div className="flex items-center justify-center gap-[2px]">
        <button className="text-[#237AF2] text-center font-pretendard text-base font-bold leading-[150%]">
          더 알아보기
        </button>
        <RightChevron />
      </div>
    </div>
  )
}

const NotYetReadSymbol = () => {
  return (
    <div className="w-[8px] h-[8px] bg-[#237AF2] rounded-full mt-[2px]"></div>
  )
}
