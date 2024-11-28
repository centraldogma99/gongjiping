/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */

// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID =
  "1026098647776-fnm4m5mnr861lqr9462iombvbqfq72fa.apps.googleusercontent.com"
const API_KEY = "AIzaSyBFLJha_RdYe62Nmkb-lkP0bW6LX-JLolI"

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = "https://sheets.googleapis.com/$discovery/rest?version=v4"

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly"

let tokenClient
let gapiInited = false
let gisInited = false

/**
 * Callback after api.js is loaded.
 */
export function gapiLoaded() {
  gapi.load("client", initializeGapiClient)
}

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  })
  gapiInited = true
  maybeEnableButtons()
}

/**
 * Callback after Google Identity Services are loaded.
 */
export function gisLoaded() {
  // @ts-expect-error asdf
  const tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: "", // defined later
  })
  gisInited = true
  maybeEnableButtons()
  return tokenClient
}

/**
 * Enables user interaction after all libraries are loaded.
 */
function maybeEnableButtons() {
  if (gapiInited && gisInited) {
    document.getElementById("authorize_button").style.visibility = "visible"
  }
}
