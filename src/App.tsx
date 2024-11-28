import { ListItem } from "./components/ListItem"

function App() {
  return (
    <div>
      <ListItem
        title="법정교육 수강 안내"
        description="근로자라면 매년 필수로 수강해야 하는 모든 과목을 100% 수료 부탁드립니다."
        author="김한솔"
        dueDate={new Date()}
      />
      <ListItem
        title="법정교육 수강 안내"
        description="근로자라면 매년 필수로 수강해야 하는 모든 과목을 100% 수료 부탁드립니다."
        author="김한솔"
        dueDate={new Date()}
        notYetRead
      />
      <ListItem
        title="법정교육 수강 안내"
        description="근로자라면 매년 필수로 수강해야 하는 모든 과목을 100% 수료 부탁드립니다."
        author="김한솔"
        dueDate={new Date()}
      />
      <ListItem
        title="법정교육 수강 안내"
        description="근로자라면 매년 필수로 수강해야 하는 모든 과목을 100% 수료 부탁드립니다."
        author="김한솔"
        dueDate={new Date()}
      />
    </div>
  )
}

export default App
