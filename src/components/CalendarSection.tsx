import { useState } from "react"
import { Calendar } from "./Calendar"
import { snackMockData } from "../App"
import dayjs from "dayjs"

export const CalendarSection = ({ className }: { className?: string }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const todaySnack = snackMockData.find((snack) =>
    dayjs(snack.date).isSame(selectedDate, "day")
  )
  return (
    <div className={className}>
      <Calendar selectedDate={selectedDate} onChange={setSelectedDate} />

      <div className="mt-[30px]">
        {todaySnack &&
          todaySnack.snacks.map((snack, i) => (
            <div
              key={i}
              className={`flex items-center gap-[15px] ${
                i === 0 ? "" : "mt-[10px]"
              }`}
            >
              <span className="text-[#788391] font-semibold text-base leading-[150%]">
                {i + 1}
              </span>
              <span className="text-[#2B2F34] font-semibold text-base leading-[150%]">
                {snack}
              </span>
            </div>
          ))}
      </div>
    </div>
  )
}
