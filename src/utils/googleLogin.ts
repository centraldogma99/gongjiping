export const googleLogin = () => {
  if (window.gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    window.tokenClient.requestAccessToken({ prompt: "consent" })
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    window.tokenClient.requestAccessToken({ prompt: "" })
  }
}
