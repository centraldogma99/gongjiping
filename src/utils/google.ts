import type { ListItemProps } from "../components/ListItem"

export const googleLogin = (
  callback: (data: (ListItemProps & { writtenDate: Date })[]) => void
) => {
  window.tokenClient.callback = async () => {
    const data = await loadNoticeList()
    if (data) callback(data)
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

export const loadNoticeList = async () => {
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
    return []
  }
  return (range.values as string[][]).map((item) => {
    return {
      title: item[0],
      dueDate: item[1] ? new Date(item[1]) : undefined,
      description: item[2],
      author: item[4],
      writtenDate: new Date(item[5]),
    }
  })
}
