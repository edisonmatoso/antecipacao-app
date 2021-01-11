import { AnticipationsResults } from '../hooks/useAnticipation'
import { Wrapper, Title, Divider, Result } from './ResultsWrapper.styles'

type ResultsProps = {
  periods: Array<string>,
  antecipations?: AnticipationsResults
}

export default function ResultsWrapper({ periods, antecipations }: ResultsProps) {
  return (
    <Wrapper>
      <Title>Você receberá:</Title>
      <Divider />
      {
        periods.map((period) => (
          <Result key={period}>
            {
              period === '1'
                ? <span>Amanhã: <strong>R$ {antecipations ? antecipations[period] : '0,00'}</strong></span>
                : <span>Em {period} dias: <strong>R$ {antecipations ? antecipations[period] : '0,00'}</strong></span>
            }

          </Result>
        ))
      }

    </Wrapper>
  )
}
