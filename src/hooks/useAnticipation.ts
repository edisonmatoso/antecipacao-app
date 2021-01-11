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
  const {
    post,
    error,
    data,
    response,
    abort
  } = useFetch('https://hash-front-test.herokuapp.com/')
  const [antecipations, setAnticipations] = useState<AnticipationsResults>(data)

  useEffect(() => {
    if (response.ok) {
      setAnticipations(data)
    }
  }, [data])

  function handleFetch(params: AnticipationParams) {
    abort()
    post('', params)
  }

  return {
    antecipations,
    error,
    handleFetch
  }
}
