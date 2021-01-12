import { Base, Main } from './App.styles'
import FormWrapper from './FormWrapper'
import useAnticipation from './hooks/useAnticipation'
import ResultsWrapper from './ResultsWrapper'

function App() {
  const urlParams = new URLSearchParams(window.location.search)
  const periodsParam = urlParams?.get('periods')
  const periods = periodsParam ? periodsParam.split(',') : ['1', '15', '30', '90']

  const {
    anticipations,
    handleFetch,
    isInternalError,
    isTimeouted,
    loading
  } = useAnticipation()

  return (
    <Base>
      <Main>
        <FormWrapper
          handleFetch={handleFetch}
          isInternalError={isInternalError}
          isTimeouted={isTimeouted}
          loading={loading}
          periods={periods}
        />
        <ResultsWrapper anticipations={anticipations} periods={periods} />
      </Main>
    </Base>
  )
}

export default App
