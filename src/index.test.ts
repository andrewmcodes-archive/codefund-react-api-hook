import { useCodeFundAd } from "./"
import { renderHook } from "@testing-library/react-hooks"

describe("useCodeFundAd", () => {
  it("will not render an ad in development", () => {
    const { result } = renderHook(() => useCodeFundAd("0"))

    expect(result.current).toStrictEqual({
      ad: undefined,
      error: undefined,
      loading: false,
    })
  })
})
