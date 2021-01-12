import { AnticipationsResults } from '../hooks/useAnticipation'
import { Wrapper, Title, Divider, Result } from './ResultsWrapper.styles'

export type ResultsProps = {
  anticipations?: AnticipationsResults,
  periods: Array<string>,
}

export default function ResultsWrapper({ anticipations, periods }: ResultsProps) {
  return (
    <Wrapper>
      <Title>Você receberá:</Title>
      <Divider />
      {
        periods.map((period) => (
          <Result key={period} role="result">
            {
              period === '1'
                ? <span>
                    Amanhã:
                    <strong>
                      R$ {anticipations ? anticipations[period] : '0,00'}
                    </strong>
                  </span>
                : <span>
                    Em {period} dias:
                      <strong>
                        R$ {anticipations ? anticipations[period] : '0,00'}
                      </strong>
                  </span>
            }

          </Result>
        ))
      }
    </Wrapper>
  )
}
