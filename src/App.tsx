import { useState } from "react"
import { Banner } from "./components/Banner"
import { CalendarSection } from "./components/CalendarSection"
import { NoticeList } from "./components/NoticeList"
import { TopBar } from "./components/TopBar"
import { NotLoggedIn } from "./components/NotLoggedIn"
import type { ListItemProps } from "./components/ListItem"
import { googleLogin, loadNoticeList } from "./utils/google"

export const snackMockData = [
  {
    date: new Date("2024-11-29"),
    snacks: ["가츠동덮밥 (소)", "호밀빵치즈샌드위치"],
  },
  {
    date: new Date("2024-11-28"),
    snacks: ["김치볶음밥", "우동"],
  },
  {
    date: new Date("2024-11-27"),
    snacks: ["치킨마요덮밥", "샐러드"],
  },
  {
    date: new Date("2024-11-26"),
    snacks: ["돈까스", "미소국"],
  },
  {
    date: new Date("2024-11-25"),
    snacks: ["비빔밥", "떡볶이"],
  },
  {
    date: new Date("2024-11-24"),
    snacks: ["라멘", "주먹밥"],
  },
  {
    date: new Date("2024-11-23"),
    snacks: ["마파두부덮밥", "유부초밥"],
  },
  {
    date: new Date("2024-11-22"),
    snacks: ["짜장면", "군만두"],
  },
  {
    date: new Date("2024-11-21"),
    snacks: ["카레라이스", "샌드위치"],
  },
  {
    date: new Date("2024-11-20"),
    snacks: ["오므라이스", "우동"],
  },
  {
    date: new Date("2024-11-19"),
    snacks: ["규동", "미니김밥"],
  },
  {
    date: new Date("2024-11-18"),
    snacks: ["냉면", "튀김우동"],
  },
  {
    date: new Date("2024-11-17"),
    snacks: ["제육덮밥", "라면"],
  },
  {
    date: new Date("2024-11-16"),
    snacks: ["돈부리", "샐러드"],
  },
  {
    date: new Date("2024-11-15"),
    snacks: ["김치찌개", "주먹밥"],
  },
  {
    date: new Date("2024-11-14"),
    snacks: ["우동", "유부초밥"],
  },
  {
    date: new Date("2024-11-13"),
    snacks: ["된장찌개", "김밥"],
  },
  {
    date: new Date("2024-11-12"),
    snacks: ["짬뽕", "군만두"],
  },
  {
    date: new Date("2024-11-11"),
    snacks: ["순두부찌개", "주먹밥"],
  },
  {
    date: new Date("2024-11-10"),
    snacks: ["비빔국수", "샐러드"],
  },
  {
    date: new Date("2024-11-09"),
    snacks: ["돈까스카레", "유부초밥"],
  },
] as const

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [noticeList, setNoticeList] = useState<
    (ListItemProps & { writtenDate: Date })[]
  >([])

  const handleLogin = () =>
    googleLogin((data) => {
      setIsLoggedIn(true)
      setNoticeList(data)
    })
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      <div>
        <Banner />
      </div>

      {isLoggedIn ? (
        <div className="flex flex-row gap-[20px] max-w-[1299px] mx-auto justify-center">
          <>
            <CalendarSection className="px-[50px] border-r border-[#E8EBED] pt-[54px]" />
            <NoticeList
              className="pt-[54px] px-[50px] max-w-[875px]"
              content={noticeList}
              onRefresh={async () => {
                const data = await loadNoticeList()
                console.log(data)
                if (data) setNoticeList(data)
              }}
            />
          </>
        </div>
      ) : (
        <NotLoggedIn onLogin={handleLogin} className="flex-1" />
      )}
    </div>
  )
}

export default App
