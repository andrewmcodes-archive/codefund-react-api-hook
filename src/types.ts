export interface ICodeFundAd {
  campaignUrl: string
  impressionUrl: string
  codefundUrl: string
  fallback: boolean
  headline?: string
  body?: string
  images?: any[]
  html: string
}

export interface ICodeFundAdResponse {
  loading: boolean
  error?: string
  ad?: ICodeFundAd
}
