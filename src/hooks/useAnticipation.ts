import useFetch from 'use-http'
import { useEffect, useState } from 'react'

export type AnticipationParams = {
  amount: number,
  installments: number,
  mdr: number,
  days: Array<string>
}

export type AnticipationsResults = {
  [name: string]: number
}

export default function useAnticipation() {
  const [isTimeouted, setIsTimeouted] = useState<Boolean>(false)
  const [isInternalError, setIsInternalError] = useState<Boolean>(false)
  const [anticipations, setAnticipations] = useState<AnticipationsResults>()

  const {
    abort,
    data,
    loading,
    post,
    response
  } = useFetch('https://hash-front-test.herokuapp.com/?delay=1000')

  useEffect(() => {
    setIsTimeouted(false)
    setIsInternalError(false)

    if (response.ok) {
      setAnticipations(data)
    }

    if (data?.message === 'Timeout') {
      setIsTimeouted(true)
    }

    if (data?.message === 'Internal Server Error') {
      setIsInternalError(true)
    }
  }, [data])

  function handleFetch(params: AnticipationParams) {
    abort()
    post('', params)
  }

  return {
    anticipations,
    handleFetch,
    isInternalError,
    isTimeouted,
    loading
  }
}
