export function fetchStatusHandler(response: any) {
  if (response.status === 200) {
    return response
  } else {
    throw new Error(response.statusText)
  }
}
