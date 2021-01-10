import { Wrapper, Title, Divider, Result } from './ResultsWrapper.styles'

export default function ResultsWrapper() {
  return (
    <Wrapper>
      <Title>Você receberá:</Title>
      <Divider />
      <Result>
        Amanhã: <strong>R$ 0,00</strong>
      </Result>
      <Result>
        Em 15 dias: <strong>R$ 0,00</strong>
      </Result>
      <Result>
        Em 30 dias: <strong>R$ 0,00</strong>
      </Result>
      <Result>
        Em 90 dias: <strong>R$ 0,00</strong>
      </Result>
    </Wrapper>
  )
}
