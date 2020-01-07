import { useEffect, useState } from "react"
import { fetchStatusHandler } from ".././utils"
import { ICodeFundAd, ICodeFundAdResponse } from "../types"

export default function useCodeFundAd(id: string): ICodeFundAdResponse {
  const [ad, setCodeFundAd] = useState<ICodeFundAd | undefined>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()

  if (!id || process.env.NODE_ENV !== "production")
    return { ad, loading, error }

  useEffect(() => {
    const apiUrl = `https://app.codefund.io/properties/${id}/funder.json`
    setLoading(true)
    fetch(apiUrl)
      .then(fetchStatusHandler)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setLoading(false)
        setCodeFundAd(data.html)
      })
      .catch(e => {
        setCodeFundAd(undefined)
        setLoading(false)
        setError(e)
      })
  }, [])

  return {
    ad,
    loading,
    error,
  }
}
