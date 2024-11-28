import { useState } from "react"
import { LoadSheet } from "./components/LoadSheet"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <LoadSheet />
    </div>
  )
}

export default App
