import dayjs from "dayjs"
import { FoodSVG } from "../assets"

import { LeftChevron } from "../assets/LeftChevron"
import { RightChevron } from "../assets/RightChevron"

interface CalendarProps {
  selectedDate: Date
  className?: string
  onChange: (date: Date) => void
}

const getWeekDates = (date: Date) => {
  const currentDay = date.getDay() // 0은 일요일, 6은 토요일
  const sunday = new Date(date)
  sunday.setDate(date.getDate() - currentDay) // 해당 주의 일요일로 설정

  const weekDates: Date[] = []
  for (let i = 0; i < 7; i++) {
    const day = new Date(sunday)
    day.setDate(sunday.getDate() + i)
    weekDates.push(day)
  }
  return weekDates
}

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"]

export const Calendar = ({
  selectedDate,
  onChange,
  className,
}: CalendarProps) => {
  const goToNextWeek = () => {
    onChange(dayjs(selectedDate).add(1, "week").toDate())
  }

  const goToPreviousWeek = () => {
    onChange(dayjs(selectedDate).subtract(1, "week").toDate())
  }

  const goToToday = () => {
    onChange(new Date())
  }

  const weekDates = getWeekDates(selectedDate)

  return (
    <div>
      <div className="flex items-center gap-[8px]">
        <FoodSVG />
        <span className="text-[#141618] text-[28px] font-bold leading-[150%]">
          오늘의 메뉴
        </span>
      </div>

      <div className="flex items-center justify-between gap-[8px] mt-[24px]">
        <span className="text-[#2B2F34] text-base font-semibold leading-[150%]">
          {dayjs(selectedDate).format("YYYY년 MM월")}
        </span>

        <div className="flex items-center gap-[10px]">
          <LeftChevron color="#B9C0C6" size={16} onClick={goToPreviousWeek} />
          <button
            className="text-[#B9C0C6] font-semibold text-base leading-[150%]"
            onClick={goToToday}
          >
            오늘
          </button>
          <RightChevron color="#B9C0C6" size={16} onClick={goToNextWeek} />
        </div>
      </div>

      <div
        className={`min-w-[324px] grid grid-cols-7 grid-rows-2 gap-x-[10px] gap-y-[13px] h-[67px] my-[20px] ${className}`}
      >
        {WEEKDAYS.map((weekday) => (
          <div className="flex items-center justify-center text-sm text-[#788391]">
            {weekday}
          </div>
        ))}
        {weekDates.map((weekDate) => (
          <button
            className={`flex items-center justify-center text-sm font-semibold rounded-full p-[6px] h-[40px] w-[40px] ${
              dayjs(weekDate).day() === 0 || dayjs(weekDate).day() === 6
                ? "text-[#B9C0C6]"
                : ""
            } ${
              dayjs(weekDate).isSame(selectedDate, "day")
                ? "bg-[#E9F2FF] text-[#237AF2]"
                : ""
            }`}
            onClick={() => onChange(weekDate)}
          >
            {dayjs(weekDate).format("DD")}
          </button>
        ))}
      </div>
    </div>
  )
}
