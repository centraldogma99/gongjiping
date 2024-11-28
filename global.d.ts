export {}
declare global {
  interface Window {
    gapi: {
      client: {
        getToken: () => any
        sheets: {
          spreadsheets: {
            values: {
              get: (params: {
                spreadsheetId: string
                range: string
              }) => Promise<any>
            }
          }
        }
      }
    }
    tokenClient: {
      callback: (resp: { error?: Error }) => void
      requestAccessToken: (options: { prompt: string }) => void
    }
  }
}
