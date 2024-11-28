import { useState } from "react"

export const LoadSheet = () => {
  const [content, setContent] = useState("")

  const handleLoad = () => {
    window.tokenClient.callback = async (resp: { error?: Error }) => {
      if (resp.error !== undefined) {
        console.error(resp.error)
        throw resp
      }

      let response
      try {
        // Fetch first 10 files
        response = await window.gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: "1LaGrCPE93LoZUpfD9_Y4HP9AhvPMdwTc9AEeNWxHle0",
          range: "A2:E",
        })
      } catch (err) {
        setContent((err as Error).message)
        return
      }
      const range = response.result
      if (!range || !range.values || range.values.length == 0) {
        setContent("No values found.")
        return
      }
      // Flatten to string to display
      const output = range.values.reduce(
        (str: string, row: string[]) => `${str}${row[0]}, ${row[4]}\n`,
        "Name, Major:\n"
      )
      setContent(output)
    }
    if (window.gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      window.tokenClient.requestAccessToken({ prompt: "consent" })
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      window.tokenClient.requestAccessToken({ prompt: "" })
    }
  }

  return (
    <div>
      <button onClick={handleLoad}>load</button>
      <div>{content}</div>
    </div>
  )
}
