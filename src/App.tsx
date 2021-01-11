import { Base, Main } from './App.styles'
import FormWrapper from './FormWrapper'
import ResultsWrapper from './ResultsWrapper'
import useAnticipation from './hooks/useAnticipation'

function App() {
  const urlParams = new URLSearchParams(window.location.search)
  const periodsParam = urlParams?.get('periods')
  const periods = periodsParam ? periodsParam.split(',') : ['1', '15', '30', '90']

  const { handleFetch, antecipations } = useAnticipation()
  return (
    <Base>
      <Main>
        <FormWrapper handleFetch={handleFetch} periods={periods} />
        <ResultsWrapper periods={periods} antecipations={antecipations} />
      </Main>
    </Base>
  )
}

export default App
